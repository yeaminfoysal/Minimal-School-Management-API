import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserServices.createUser(req.body)

        res.status(201).json({
            message: "User created successfully",
            user
        })
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        next(err)
    }
}

export const UserController = { createUser }