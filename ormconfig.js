const env = require('dotenv')
env.config()

const production = process.env.NODE_ENV === 'production';

module.exports = {
  name: 'default',
  url: production ? process.env.EA_PROD_DATABASE_URL : '',
  type: production ? process.env.EA_PROD_DATABASE_TYPE : process.env.EA_DATABASE_TYPE,
  host: production ? process.env.EA_PROD_DATABASE_HOST : process.env.EA_DATABASE_HOST,
  port: 5432,
  username: production ? process.env.EA_PROD_DATABASE_USERNAME : process.env.EA_DATABASE_USERNAME,
  password: production ? process.env.EA_PROD_DATABASE_PASSWORD : process.env.EA_DATABASE_PASSWORD,
  database: production ? process.env.EA_PROD_DATABASE_NAME : process.env.EA_DATABASE_NAME,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
};
