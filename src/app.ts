import express from "express";
import compression from "compression"; // compresses requests
import bodyParser from "body-parser";
import logger from "./util/logger";
import dotenv from "dotenv";
import CORS from "cors";
import path from "path";

import expressValidator from "express-validator";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import apiController from "./controllers/api";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 8080);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(
    CORS({
        exposedHeaders: ["x-page", "x-page-size", "x-total-count"]
    })
);
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary Views routes.
 */

app.use("/api", apiController);

export default app;
