FROM alpine:latest
RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY . /app

RUN npm install && npm install --save sqlite3

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start:dev" ]