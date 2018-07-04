import jwt from "jsonwebtoken";
import config from "../config";

type User = {
    id: string;
    mobile: string;
};

export const createToken = (payload: User) => {
    return jwt.sign(payload, config.jwt.privateKey, config.jwt.options);
};

export const validateToken = (token: string) => {
    if (token) {
        const user = jwt.verify(token, config.jwt.privateKey);
        return user;
    } else {
        return false;
    }
};
