import AppError from "../../errorHelpers/AppError";
import { IStudent } from "./student.interface"
import { Student } from "./student.model"

const createStudent = async (payload: Partial<IStudent>) => {
    const email = payload.email;
    const isExistStudent = await Student.findOne({ email })

    if (isExistStudent) {
        throw new AppError(401, "Student already exists with this email.")
    }

    const student = Student.create(payload)
    return student
}

const getStudentByID = async (id: string) => {
    const student = await Student.findById(id);

    if (!student) {
        throw new AppError(404, "Not found any student with this id.")
    }

    return student
}
export const StudentServices = { createStudent, getStudentByID }