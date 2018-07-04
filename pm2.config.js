module.exports = {
  apps: [
    {
      name: "typescript-express-sequelize-boilerplate",
      script: "./dist/server.js",
      watch: true,
      env_develop: {
        NODE_ENV: "develop"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {}
};
