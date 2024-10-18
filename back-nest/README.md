*** NEST JS + PRISMA (Postgresql) + SOCKET CRUD ***

# CONFIGURE APPLICATION

## 1. Setting Environment Variables (.env)

```bash
$ DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"
$ PORT=3000
```

## 2. Run application (dev)
```bash
$ npm run start:dev
```

# USED ​​GUIDE AND STACK

## 1. Create aplication

```bash
$ nest new nest-next-socket-prisma-crud
```

## 2. Install Prisma (Postgresql to default)

```bash
$ npm install prisma --save-dev
$ npm install @prisma/client

$ npx prisma init
$ npx prisma migrate dev --name [name_migrate]
```

## 3. Install Socket (Real Time)

```bash
$ npm i --save @nestjs/websockets @nestjs/platform-socket.io
```

Goodbye! Happy coding

Mike Vera