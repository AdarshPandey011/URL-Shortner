import mongoose from 'mongoose';

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    createdAt: Date;
}

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})

export const UserModel = mongoose.model<User>('User', userSchema);