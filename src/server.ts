import { Request, Response, NextFunction } from "express";

// import User from "./models/_User";
// import Category from "./models/Category";
// import Place from "./models/_Place";

import app from "./app";
import { sequelize } from "./sequelize";
import config from "./config";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).send(err.message);
});

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), async () => {
    await sequelize.sync({
        force: config.db.forceSync,
        alter: config.db.alter
    });

    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
