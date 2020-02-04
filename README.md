# EA Game Review API

## Schema

![Alt](ea_schema.png)

## Deployment Guide

### Requirements

#### Build-time & Run-time

- Docker 19.03.5
- Node v8.12.0
- npm 6.8.0

### Running in local machine

1. `npm install`
2. `npm run start:dev`

### Build and Run Docker Image

1. `npm run docker:build-image`
2. `npm run docker:start`

(optionally run and expose ports)

2. `npm run docker:start-expose`

## Testing

`npm run test`

## API Docs

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
