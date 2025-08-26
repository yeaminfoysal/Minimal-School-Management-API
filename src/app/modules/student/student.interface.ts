// students (id, name, age, class_id?)

import { Types } from "mongoose";

export interface IStudent {
    _id?: string,
    name: string,
    age: number,
    email: string,
    class_id: Types.ObjectId[]
}