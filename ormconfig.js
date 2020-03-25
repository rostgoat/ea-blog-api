const env = require('dotenv')
env.config()

module.exports = {
  name: 'default',
  url: process.env.DATABASE_URL,
  port: 5432,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
  extra: {
    ssl: true,
  },
};


