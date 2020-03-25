const parse = require('pg-connection-string').parse;
const env = require('dotenv')
env.config()

const config = parse(process.env.DATABASE_URL)

const pgConnection  = {
  type: "postgres",
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
  extra: {
    ssl: true,
  }
}
console.log('pgConnection', pgConnection)

module.exports = pgConnection;