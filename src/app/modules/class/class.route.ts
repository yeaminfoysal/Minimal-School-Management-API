import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { ClassController } from "./class.controller";

export const ClassRoutes = Router()

ClassRoutes.post(
    "/",
    checkAuth("ADMIN"),
    ClassController.createClass
)

ClassRoutes.post(
    "/:id/enroll",
    checkAuth("ADMIN", "TEACHER"),
    ClassController.enrollClass
)

ClassRoutes.get(
    "/:id/students",
    checkAuth("ADMIN", "TEACHER", "STUDENT"),
    ClassController.getStudentsOfClass
)