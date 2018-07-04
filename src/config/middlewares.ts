import { Request, Response, NextFunction } from "express";

/**
 * Login Required middleware.
 */
export let isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    next();
};
