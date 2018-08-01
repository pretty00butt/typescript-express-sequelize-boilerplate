import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import bcrypt from "bcrypt-nodejs";
import { createToken } from "../../util/jwt";
import User from "../../models/User";

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password } = req.body;

    try {
        const _user = await User.findOne({
            where: {
                email
            }
        });

        if (!_user) {
            next(new createError.NotFound("사용자를 찾을 수 없습니다."));
        } else {
            const valid = bcrypt.compareSync(_user.password, password);
            if (!valid) {
                next(
                    new createError.Unauthorized(
                        "비밀번호가 일치하지 않습니다."
                    )
                );
            } else {
                const user = _user.get();
                delete user.password;
                const token = createToken(user);
                res.json({
                    user,
                    token
                });
            }
        }
    } catch (err) {
        next(new createError.InternalServerError(err.message));
    }
};
