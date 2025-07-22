import { UserModel } from "../models/userModel";
export async function userService({email}:any   ) {

    const user = await UserModel.findOne({email})

    return user
}

