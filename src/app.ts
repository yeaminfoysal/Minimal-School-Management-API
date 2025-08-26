import express, { Request, Response } from "express"
import cors from "cors"
import { UserRoutes } from "./app/modules/user/user.route";
import { AuthRoutes } from "./app/modules/auth/auth.route";
import { StudentRoutes } from "./app/modules/student/student.route";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1/user", UserRoutes)
app.use("/api/v1/auth", AuthRoutes)
app.use("/api/v1/students", StudentRoutes)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Mini school management API"
    })
})

app.use(globalErrorHandler)

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

export default app;