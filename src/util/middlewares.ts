import { Request, Response, NextFunction } from "express";
import { validateToken } from "./jwt";
import config from "../config";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.get(config.headers.token);
    if (token) {
        const isValid = validateToken(token);
        if (isValid) {
            next();
        } else {
            const error = new Error("You requested with wrong authentication key. Please sign in again.");
            next(error);
        }
    } else {
        const error = new Error("You have to signin first");
        next(error);
    }
};

// export const checkAuthenticated = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.get(config.headers.token);
//     if (token) {
//         const isValid = validateToken(token);
//         if (isValid) {
//             req.authenticated = true
//             next();
//         } else {
//             const error = new Error("You requested with wrong authentication key. Please sign in again.");
//             next(error);
//         }
//     } else {
//         const error = new Error("You have to signin first");
//         next(error);
//     }
// };
