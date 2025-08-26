import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";

export const globalErrorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {

    console.log(err);

    let errorSources: any = []
    let statusCode = 500
    let message = "Something Went Wrong!!"

    if (err instanceof AppError) {
        statusCode = err.statusCode
        message = err.message
    } else if (err instanceof Error) {
        statusCode = 500;
        message = err.message
    }

    res.status(statusCode).json({
        success: false,
        message,
        errorSources
    })
}