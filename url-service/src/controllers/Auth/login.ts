import { Request,Response } from "express";
import { userService } from "../../services/userService";
import jwt from "jsonwebtoken";
import { verifyPassword } from "../../utility/verifyPassword";

export async function login(req:Request, res:Response){
    const {email,password} = req.body
    const user = await userService({email})

    if(user){
        const isMatch = await verifyPassword({password, hashedPassword: user.password});

        if(isMatch){
            const token = jwt.sign({email},process.env.JWT_SECRET!,{expiresIn:"1h"});
            return res.status(200).json({token,message:"Login successful"});
        }
        else{
            return res.status(400).json({message:"Invalid credentials"});
        }


        

        
        
    }
}