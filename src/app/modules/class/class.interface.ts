import { Types } from "mongoose";

export interface IClass {
    _id?: string,
    name: string,
    section: string,
    students: Types.ObjectId[]
}