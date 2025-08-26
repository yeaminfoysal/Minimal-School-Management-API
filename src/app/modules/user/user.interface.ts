
export enum Role {
    STUDENT = "STUDENT",
    ADMIN = "ADMIN",
    TEACHER = "TEACHER"
}

export interface IUser {
    _id?: string,
    name: string,
    email: string,
    password: string,
    role: Role
}