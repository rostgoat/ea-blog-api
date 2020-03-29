import { v4 as uuid } from 'uuid';
import { S3, config } from 'aws-sdk';
import { Logger } from '@nestjs/common';

config.region = process.env.AWS_REGION;
config.setPromisesDependency(require('bluebird').Promise);

config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log('Access key:', config.credentials.accessKeyId);
    console.log('Secret access key:', config.credentials.secretAccessKey);
  }
});

export default class Storage {
  private logger: Logger;
  private s3;
  private bucketPrefix;

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
      apiVersion: '2006-03-01',
    });
    this.logger = new Logger('S3');
    this.bucketPrefix = 'gameBibleTestBucket';
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
    console.log('bucket', bucket);
    console.log('options', options);
    let params = options || {
      CreateBucketConfiguration: {
        LocationConstraint: process.env.AWS_REGION,
      },
    };
    params.Bucket = bucket;
    return new Promise((resolve, reject) => {
      this.s3.createBucket(params, (err, data) => {
        if (err) {
          if (
            err.code === 'BucketAlreadyOwnedByYou' ||
            err.code === 'BucketAlreadyExists'
          ) {
            this.logger.warn(
              `S3 : createBucket : Bucket already exists :
                ${this.bucketPrefix}${bucket}`,
            );
            // Mock result
            resolve({ Location: `/${this.bucketPrefix}${bucket}` });
          } else {
            reject(err);
          }
        } else {
          resolve(data);
        }
      });
    });
  }
}
