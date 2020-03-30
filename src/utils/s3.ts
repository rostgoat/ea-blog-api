import { v4 as uuid } from 'uuid';
import { S3, config } from 'aws-sdk';
import { Logger } from '@nestjs/common';
import { existsAsync, createReadStream } from './file';
export default class Storage {
  private logger: Logger;
  private s3;

  constructor() {
    // production configs
    if (process.env.NODE_ENV === 'production') {
      this.s3 = new S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        apiVersion: '2006-03-01',
        s3ForcePathStyle: true
      });
    } else {
      // local configs with localstack
      this.s3 = new S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        apiVersion: '2006-03-01',
        endpoint: process.env.LOCALSTACK_S3_ENDPOINT,
        s3ForcePathStyle: true
      });
    }
    this.logger = new Logger('S3');
    config.region = process.env.AWS_REGION;
    config.setPromisesDependency(require('bluebird').Promise);
  }

  /**
   * Create an S3 Bucket.
   *
   * @param {String} bucket - name of S3 Bucket
   * @param {Object} [options] - configuration parameters for S3's `createBucket`
   *
   * @returns {Object} - object containing location/name of S3 Bucket created.
   */
  createBucket(bucket, options) {
    let params = options || {
      CreateBucketConfiguration: {
        LocationConstraint: process.env.AWS_REGION,
      },
    }
    params.Bucket = bucket
    return new Promise((resolve, reject) => {
      this.s3.createBucket(params, (err, data) => {
        if (err) {
          if (
            err.code === 'BucketAlreadyOwnedByYou' ||
            err.code === 'BucketAlreadyExists'
          ) {
            this.logger.warn(
              `S3 : createBucket : Bucket already exists :
                ${bucket}`,
            );
            resolve({ Location: `/${bucket}` });
          } else {
            reject(err);
          }
        } else {
          resolve(data);
        }
      });
    });
  }

  async putFile(bucket, infile, outfile, options) {
    let result;
    if (typeof infile === 'string') {
      const exists = await existsAsync(infile);

      if (!exists) {
        throw new Error(`${infile} does not exist`);
      }
      return createReadStream(infile);
    } else if (
      typeof infile === 'object' &&
      infile.constructor.name === 'ReadStream'
    ) {
      result = await Promise.resolve(infile);
    }

    return new Promise((resolve, reject) => {
      if (result) infile = result;
      infile.on('error', err => {
        reject(err);
      });
      const params = options || {};
      params.Bucket = bucket;
      params.Body = infile;
      params.Key = outfile;
      this.s3.upload(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  getSignedUrl(bucket, key) {
    let params = {
      Bucket: bucket,
      Key: key,
    };
    return this.s3.getSignedUrl('getObject', params);
  }
}
