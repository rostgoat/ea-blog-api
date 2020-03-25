const env = require('dotenv')
env.config()

const ORMConfig = {
  name: 'default',
  type: process.env.EA_PROD_DATABASE_TYPE,
  host: process.env.EA_PROD_DATABASE_HOST,
  port: 5432,
  username: process.env.EA_PROD_DATABASE_USERNAME,
  password: process.env.EA_PROD_DATABASE_PASSWORD,
  database: process.env.EA_PROD_DATABASE_NAME,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
  extra: {
    ssl: true,
  },
};
export = ORMConfig