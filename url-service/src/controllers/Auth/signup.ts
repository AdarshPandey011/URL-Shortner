import {Request,Response} from "express"
import { userService } from "../../services/userService"
import { UserModel } from "../../models/userModel";
import { hash } from "crypto";
import { hashedPassword } from "../../utility/hashedPassword";

export async function signup(req:Request,res:Response){
    console.log(req.body)
    const {username,email,password} = req.body

    const user = await userService({email})

    if(user){
        return res.status(400).json({message:"User already exists"})
    }
    else{
        const hashed =  hashedPassword({password})
        const newUser = await UserModel.create({username,email,password:hashed})
        return res.status(201).json({message:"User created successfully",user:newUser})
    }
}

