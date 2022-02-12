# Prisma Playground

## Get started
Install dependencies
```
npm install
```
Set the `DATABASE_URL` in the `.env` file to point to your existing database
https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgres

Create migration and migrate
```
npx prisma migrate dev --name init
```
Generate everytime schema/migration changes
```
npx prisma generate
```
To open Prisma Studio (GUI)...
```
npx prisma studio
```
...then check `http://localhost:5555`

Start node express server
```
npm start
```
