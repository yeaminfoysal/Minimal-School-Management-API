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
        const students = await Student.find()

        res.status(200).json({
            success: true,
            message: 'Students retrieved successfully',
            data: students
        })
    } catch (error) {
        next(error)
    }
}

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