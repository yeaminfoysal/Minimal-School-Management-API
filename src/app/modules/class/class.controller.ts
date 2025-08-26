import { NextFunction, Request, Response } from "express";
import { Class } from "./class.model";
import { ClassServices } from "./class.service";

const createClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const classData = await Class.create(req.body);

        res.status(201).json({
            success: true,
            message: "Class created successfully",
            data: classData
        })
    } catch (error) {
        next(error)
    }
}

const enrollClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const classData = await ClassServices.enrollClass(req.params.id, req.body.studentId);

        res.status(201).json({
            success: true,
            message: "Enrolled class successfully",
            data: classData
        })
    } catch (error) {
        next(error)
    }
}

const getStudentsOfClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const students = await ClassServices.getStudentsOfClass(req.params.id);

        res.status(201).json({
            success: true,
            message: "Students retrieved successfully of a class",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

export const ClassController = {
    createClass,
    enrollClass,
    getStudentsOfClass
}