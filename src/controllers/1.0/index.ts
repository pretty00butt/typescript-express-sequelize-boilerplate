"use strict";

import { Router, Response, Request, NextFunction } from "express";
// import { check } from "express-validator/check";

const router = Router();

import * as authController from "./auth";

router.get("/", (req: Request, res: Response) => {
    res.json({
        version: "1.0"
    });
});

/**
 * Auth
 */
router.post("/login", authController.login);

export default router;
