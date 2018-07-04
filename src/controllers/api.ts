"use strict";

import { Router, Response, Request, NextFunction } from "express";
// import { check } from "express-validator/check";

const router = Router();

import version10 from "./1.0";

router.get("/", (req: Request, res: Response) => {
    res.json({
        name: "Baroquick API"
    });
});

/**
 * Auth
 */
router.use("/1.0", version10);

export default router;
