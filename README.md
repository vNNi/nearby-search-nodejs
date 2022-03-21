# Fiap-order-service

### Domain
From Nearby location search, created a micro service to expose their functionalities

### Setup

## Prerequisite

> Docker
> Node >= 14

To install all project, follow:

1. npm install
2. docker-compose up -d mysql

### Run migrations

Inside docker or with mysql configured in you machine, run:

> `./node_modules/knex/bin/cli.js migrate:latest --esm`

### Run seeds

> `./node_modules/knex/bin/cli.js seed:run --esm`

### Technologies

1. Javascript - Programming language
2. Express - Server framework
4. Mysql - Data base/Repository
3. knex - ORM for mysql
4. AVSC - Buffer parser
5. Node-config - Configuration file lib (from enviroment and yml)

### Running

#### Inside docker

1. docker-compose up

### Locally

1. npm start

### Swagger

API Documentation follow `OpenApi`:
#### Url

http://localhost:4008/api-docs/#/
