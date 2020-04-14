const parse = require('pg-connection-string').parse
const env = require('dotenv')
env.config()

const config = parse(process.env.DATABASE_URL)
/**
 * Postgres connection settings
 */
const pgConnection = {
  type: 'postgres',
  host: config.host,
  port: config.port,
  username: config.user,
  password: config.password,
  database: config.database,
  synchronize: true,
  dropSchema: false,
  logging: false,
  entities: ['/src/**/*.entity.ts', 'dist/**/*.entity.js'],
  extra: {
    ssl: true,
  },
}

module.exports = pgConnection
