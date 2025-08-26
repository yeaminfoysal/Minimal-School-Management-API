import { model, Schema } from "mongoose";
import { IStudent } from "./student.interface";

const studentSchema = new Schema<IStudent>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: Number,
            required: true,
            min: 3,
        },
        class_id: {
            type: [Schema.Types.ObjectId],
            ref: "Class",
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    });

export const Student = model<IStudent>("Student", studentSchema);