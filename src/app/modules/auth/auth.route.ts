import { Router } from "express";
import { AuthController } from "./auth.controller";

export const AuthRoutes = Router()

AuthRoutes.post("/login", AuthController.credentialsLogin);