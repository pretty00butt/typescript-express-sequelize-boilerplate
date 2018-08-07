# TypeScript + Express + Sequelize Boilerplate

boilerplate to start to develop express platform very easily with TypeScript & Sequelize

## Getting started

- Clone the repository

```sh
git clone --depth=1 https://github.com/the6thm0nth/typescript-express-sequelize-boilerplate.git
```

- Install dependencies

```sh
cd typescript-express-sequelize-boilerplate

yarn # npm install
```

## Development

```sh
yarn start # npm run start
```

Or, if you're using VS Code, you can use `cmd + shift + b` to run the default build task (which is mapped to `npm run build`), and then you can use the command palette (`cmd + shift + p`) and select `Tasks: Run Task` > `npm: start` to run `npm start` for you.

## Build

```sh
yarn build
yarn serve
```

## Docker

### Docker Compose

```sh
docker-compose up
```

### Docker

```sh
docker build . -t {TAG}
```
