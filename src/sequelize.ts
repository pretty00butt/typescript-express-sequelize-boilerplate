import { Sequelize } from "sequelize-typescript";
import User from "./models/User";
import config from "./config";

export const sequelize = new Sequelize({
    host: config.db.host,
    database: config.db.database,
    dialect: config.db.dialect,
    username: config.db.username,
    password: config.db.password,
    modelPaths: [__dirname + "/models/*.ts"]
});

sequelize.addModels([User]);
