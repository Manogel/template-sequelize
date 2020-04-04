<br />
<p align="center">
  <h3 align="center">Manogel Template for backend with express/sequelize</h3>
</p>


## Required dependencies install

```sh
yarn add @sentry/node bcryptjs bee-queue dotenv express express-async-errors express-handlebars jsonwebtoken multer nodemailer nodemailer-express-handlebars pg sequelize youch ioredis yup express-brute express-brute-redis
```
## Required devDependencies install

```sh
yarn add @sucrase/jest-plugin @types/jest eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier factory-girl faker jest nodemon prettier sequelize-cli sqlite3 sucrase supertest -D
```

## Commands of ORM sequelize

yarn sequelize migration:create --name=create-users

yarn sequelize db:migrate

yarn sequelize db:migrate:undo
_Desfaz a ultima modificação do db:migrate_

yarn sequelize db:migrate:undo:all
_Desfaz todas as modificação do db:migrate_

## Commands docker
docker network create --driver bridge postgres-network

docker run --name my-pgadmin4 --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=manoelgomes53@gmail.com" -e "PGADMIN_DEFAULT_PASSWORD=password" -d dpage/pgadmin4

docker run --name my-postgres --network=postgres-network -e "POSTGRES_PASSWORD=docker" -p 5432:5432 -v /Users/manoelgomes/Documents/postgresSQL:/var/lib/postgresql/data -d postgres

docker run --name redisbarber -p 6379:6370 -d -t redis:alpine

## Contact

Manoel Gomes - [Github](https://github.com/Manogel) - **manoelgomes53@gmail.com**

Repo: [Manogel/api-sequelize](https://github.com/Manogel/api-sequelize)
