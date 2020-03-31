import { Injectable } from '@nestjs/common';
import { S3, config } from 'aws-sdk';

let s3;
s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: '2006-03-01',
  s3ForcePathStyle: true,
});
config.region = process.env.AWS_REGION;
config.setPromisesDependency(require('bluebird').Promise);

@Injectable()
export class StorageService {
  constructor() {}

  /**
   * Get signed url of image based on bucket and key provided
   * @param bucket S3 bucket
   * @param key S3 bucket key
   */
  getSignedUrl(bucket, key) {
    let params = {
      Bucket: bucket,
      Key: key,
    };
    return s3.getSignedUrl('getObject', params);
  }
}
