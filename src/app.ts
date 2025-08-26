import express, { Request, Response } from "express"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Mini school management API"
    })
})

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

export default app;