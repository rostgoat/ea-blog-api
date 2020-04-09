# Game Bible API

### Requirements

#### Build-time & Run-time

- Docker 19.03.5
- Node v13.10.1
- npm 6.14.3

### Postgres setup

1. `create database ea_games_blog`
2. `\c ea_games_blog`
3. `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
4. `CREATE EXTENSION "pgcrypto";`

or

`npm run drop-db:local`

### Running in local machine

1. `npm install`
2. `npm run start:dev`

## Testing

To run all tests:

`npm run test`

## API Docs using Swagger

#### Launch Node Server

1. `npm start`

#### To view all the available EA Blog API methods

`http://localhost:3000/api`

Users API methods

`http://localhost:3000/api/users`

Posts API methods

`http://localhost:3000/api/posts`

Comments API methods

`http://localhost:3000/api/comments`

## Schema

![Alt](schema.png)
