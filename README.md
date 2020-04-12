<p align="center">
  <a href="https://game-bible.herokuapp.com/" target="blank"><img src="https://raw.githubusercontent.com/rostgoat/ea-blog-api/master/logo_gb.png?sanitize=true&raw=true" width="120" alt="Game Bible Logo" /></a>
</p>
<p align="center"><img width=60% src="https://github.com/rostgoat/ea-blog-api/blob/master/media/logo_gb.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

![CircleCI](https://img.shields.io/circleci/build/github/rostgoat/ea-blog-api/master)
![npm](https://img.shields.io/npm/v/npm)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)


# Overview

Game Bible is a video game blog application created to experiment with various features of the <a href="https://nestjs.com">Nest.js</a> framework. This repository features the Nest architecture patterns using Modules, TypeORM setup for PostgreSQL and Unit/Integration testing with Jest.

# Getting Started



## Prerequisites

The following must be installed to run the application

```
Node v13.10.1
npm 6.14.3
```

### Database setup

Before the application can be run locally, a working version of PostgreSQL must be installed on your OS.

After you have installed PostgreSQL, run the following commands in the pg terminal:

1. `CREATE database IF NOT EXISTS ea_games_blog`
2. `\c ea_games_blog`
3. `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
4. `CREATE EXTENSION "pgcrypto";`

or

`npm run drop-db:local`

# Running 

1. `npm install`
2. `npm run start:dev`

# Testing

To run all tests:

`npm run test`

# Docs

Swagger is the main engine behind our documentation. To view the docs:

#### Launch Node Server

 `npm start`

#### View All

`http://localhost:3000/api`

#### View Specific Model

You can view methods individually by appending a parameter to the end url

#### View Users Model

`http://localhost:3000/api/users`

# Schema

![Alt](schema.png)

# License

[MIT](LICENSE)