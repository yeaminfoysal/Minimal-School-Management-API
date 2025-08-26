import { model, Schema, Types } from "mongoose";
import { IClass } from "./class.interface";

const classSchema = new Schema<IClass>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        section: {
            type: String,
            required: true,
        },
        students: [
            { type: Types.ObjectId, ref: "Student" }
        ],
    },
    { timestamps: true }
);

export const Class = model<IClass>("Class", classSchema);