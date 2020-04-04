export const s3 = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  bucket: 'gamebible',
  basePath: 'uploads',
  fileSize: 1 * 1024 * 1024,
}
