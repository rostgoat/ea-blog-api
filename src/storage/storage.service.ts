import { Req, Res, Injectable } from '@nestjs/common';
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Injectable()
export class StorageService {
  constructor() {}

  async fileupload(@Req() req, @Res() res) {
      console.log('req', req)
      console.log('res', res)
    try {
      this.upload(req, res, function(error) {
        if (error) {
          console.log(error);
          return res.status(404).json(`Failed to upload image file: ${error}`);
        }
        return res.status(201).json(req.files[0].location);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json(`Failed to upload image file: ${error}`);
    }
  }

  upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: "rost-myshkin-b425ff41-145d-42a3-ac2a-52d12a2e2516",
      acl: 'public-read',
      key: function(request, file, cb) {
          console.log('file', file)
        cb(null, `${Date.now().toString()} - ${file.originalname}`);
      },
    }),
  }).single('image')
}