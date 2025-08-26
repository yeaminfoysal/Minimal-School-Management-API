import AppError from "../../errorHelpers/AppError";
import { Student } from "../student/student.model"
import { Class } from "./class.model";

const enrollClass = async (classId: string, studentId: string) => {

    const classDoc = await Class.findById(classId);
    if (!classDoc) {
        throw new AppError(404, "Class not found");
    }

    const student = await Student.findById(studentId);
    if (!student) {
        throw new AppError(404, "Student not found");
    }

    if (student.class_id.some(id => id.toString() === classId)) {
        throw new AppError(400, "Student is already enrolled in this class");
    }

    student.class_id.push(classId as any);
    await student.save();

    if (!classDoc.students.some(id => id.toString() === studentId)) {
        classDoc.students.push(studentId as any);
        await classDoc.save();
    }

    return { student, class: classDoc };
}

const getStudentsOfClass = async (classId: string) => {
    const students = await Class.findById(classId).populate("students")
    
    if (!students) {
        throw new AppError(404, "Something went wrong.")
    }
    return students
}
export const ClassServices = { enrollClass, getStudentsOfClass }