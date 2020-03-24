const env = require('dotenv')
env.config()

module.exports = {
  name: 'default',
  type: process.env.EA_DATABASE_TYPE,
  host: process.env.EA_DATABASE_HOST,
  port: 5432,
  username: process.env.EA_DATABASE_USERNAME,
  password: process.env.EA_DATABASE_PASSWORD,
  database: process.env.EA_DATABASE_NAME,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
};
