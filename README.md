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

### Requests

## POST - User

`http://localhost:3000/users`

# Req

```
{
	"name": "Chandler Bing"
}
```

# Res

```
{
    "name": "Chandler Bing",
    "user_id": "1ce4e257-6a9b-4a0b-b089-9b9b4584d477"
}
```

## POST - Blog Post

`localhost:3000/posts`

# Req

```
{
	"title": "bf1",
	"content": "pretty sick game, ngl",
	"user_id": "1ce4e257-6a9b-4a0b-b089-9b9b4584d477"
}
```

# Res

```
{
    "title": "bf1",
    "content": "is is big war",
    "user": {
        "user_id": "1ce4e257-6a9b-4a0b-b089-9b9b4584d477",
        "name": "rost",
        "posts": []
    },
    "post_id": "9612b961-fa6c-45c5-86e3-5af16d38c079"
}
```

## POST - Comment

`localhost:3000/comments`

# Req

```
{
	"content": "I really like this game!",
	"post_id": "9612b961-fa6c-45c5-86e3-5af16d38c079",
	"user_id": "1ce4e257-6a9b-4a0b-b089-9b9b4584d477"
}
```

# Res

```
{
    "content": "I really like this game!",
    "post": {
        "post_id": "9612b961-fa6c-45c5-86e3-5af16d38c079",
        "title": "bf1",
        "content": "is is big war",
        "comments": []
    },
    "user": {
        "user_id": "1ce4e257-6a9b-4a0b-b089-9b9b4584d477",
        "name": "rost",
        "posts": [
            {
                "post_id": "9612b961-fa6c-45c5-86e3-5af16d38c079",
                "title": "bf1",
                "content": "is is big war"
            }
        ]
    },
    "comment_id": "9a076880-1fb3-474c-86a1-7e8877cee9a4"
}
```

## GET - User

# Req

`http://localhost:3000/users/1ce4e257-6a9b-4a0b-b089-9b9b4584d477`

# Res

```
{
    "user_id": "1ce4e257-6a9b-4a0b-b089-9b9b4584d477",
    "name": "rost",
    "posts": [
        {
            "post_id": "9612b961-fa6c-45c5-86e3-5af16d38c079",
            "title": "bf1",
            "content": "is is big war"
        }
    ],
    "comments": [
        {
            "comment_id": "9a076880-1fb3-474c-86a1-7e8877cee9a4",
            "content": "I really like this game!"
        }
    ]
}
```

## PUT - Blog Post

# Req

`http://localhost:3000/posts/9612b961-fa6c-45c5-86e3-5af16d38c079`

```
{
	"title": "BO4",
	"content": "actually COD Zombies is better imo"
}
```

# Res

```
{
    "post_id": "9612b961-fa6c-45c5-86e3-5af16d38c079",
    "title": "BO4",
    "content": "actually COD Zombies is better imo"
}
```

## DELETE - User

# Req

`http://localhost:3000/users/cc854de6-688f-4a03-9ad7-cb4c849f0c23`

# Res

```
{
    "deleted": true
}
```
