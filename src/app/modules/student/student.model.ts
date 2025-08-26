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
        email: {
            type: String,
            required: true
        },
        class_id: {
            type: [Schema.Types.ObjectId],
            ref: "Class",
            required: true,
            validate: [
                {
                    validator: function (v: unknown) {
                        return Array.isArray(v);
                    },
                    message: "class_id must be an array",
                },
                {
                    validator: function (v: Schema.Types.ObjectId[]) {
                        return v.length > 0;
                    },
                    message: "A student must be assigned to at least one class",
                },
            ],
        },
    },
    {
        timestamps: true,
        versionKey: false
    });

export const Student = model<IStudent>("Student", studentSchema);