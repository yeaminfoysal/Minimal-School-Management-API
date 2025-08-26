import AppError from "../../errorHelpers/AppError";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import bcryptjs from "bcryptjs"

const createUser = async (payload: IUser) => {
    const { email, password, role, ...rest } = payload;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
        throw new AppError(400, "User already exists");
    }

    if (role == 'ADMIN' || role == "TEACHER") {
        throw new AppError(403, "You are not permited to set this role.");
    }

    const hashedPassword = await bcryptjs.hash(password as string, 10);

    const user = await User.create({
        email,
        password: hashedPassword,
        ...rest
    });

    return user;
};

export const UserServices = { createUser }