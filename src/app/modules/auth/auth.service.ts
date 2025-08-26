import AppError from "../../errorHelpers/AppError";
import { createUserToken } from "../../utils/createUserTokens";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import bcryptjs from "bcryptjs"

const credentialsLogin = async (payload: Partial<IUser>) => {
    const { email, password } = payload;
    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
        throw new AppError(400, "User does not exist")
    }

    const isPasswordMatched = await bcryptjs.compare(password as string, isUserExist.password as string)

    if (!isPasswordMatched) {
        throw new AppError(400, "Incorrect password")
    }

    const userTokens = createUserToken(isUserExist)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: pass, ...rest } = isUserExist.toObject();

    return {
        accessToken: userTokens.accessToken,
        refreshToken: userTokens.refreshToken,
        user: rest
    }
}

export const AuthServices = { credentialsLogin }
