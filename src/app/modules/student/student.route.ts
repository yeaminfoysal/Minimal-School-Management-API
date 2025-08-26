import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { StudentController } from "./student.controller";

export const StudentRoutes = Router()

StudentRoutes.post(
    "/",
    checkAuth('ADMIN'),
    StudentController.createStudent
)

StudentRoutes.get(
    "/",
    checkAuth('ADMIN', "TEACHER"),
    StudentController.getAllStudent
)

StudentRoutes.get(
    "/:id",
    checkAuth('ADMIN', "TEACHER", "STUDENT"),
    StudentController.getStudentByID
)