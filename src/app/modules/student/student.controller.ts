import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import { Student } from "./student.model";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const student = await StudentServices.createStudent(req.body)

        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: student
        })
    } catch (error) {
        next(error)
    }
}

const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const skip = (page - 1) * limit;

        const students = await Student.find()
            .skip(skip)
            .limit(limit)
            .exec();

        const total = await Student.countDocuments();

        res.status(200).json({
            success: true,
            message: 'Students retrieved successfully',
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
            data: students,
        });
    } catch (error) {
        next(error);
    }
};


const getStudentByID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const student = await StudentServices.getStudentByID(req.params.id)

        res.status(200).json({
            success: true,
            message: 'Student retrieved successfully',
            data: student
        })
    } catch (error) {
        next(error)
    }
}

export const StudentController = {
    createStudent,
    getAllStudent,
    getStudentByID
}