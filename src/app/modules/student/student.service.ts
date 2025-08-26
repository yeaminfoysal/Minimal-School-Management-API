import AppError from "../../errorHelpers/AppError";
import { Class } from "../class/class.model";
import { IStudent } from "./student.interface"
import { Student } from "./student.model"

const createStudent = async (payload: Partial<IStudent>) => {
    const classId = payload?.class_id;

    let classDoc = null;
    if (classId) {
        classDoc = await Class.findById(classId);
        if (!classDoc) {
            throw new AppError(404, "Class not found.");
        }
    }

    const student = await Student.create(payload);

    if (classId && classDoc) {
        await Class.findByIdAndUpdate(
            classId,
            { $addToSet: { students: student._id } },
            { new: true }
        );
    }

    return student;
};

const getStudentByID = async (id: string) => {
    const student = await Student.findById(id);

    if (!student) {
        throw new AppError(404, "Not found any student with this id.")
    }

    return student
}
export const StudentServices = { createStudent, getStudentByID }