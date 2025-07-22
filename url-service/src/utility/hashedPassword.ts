import bcrypt from "bcrypt"
export function hashedPassword({password}:any){
 console.log(typeof process.env.SALT_ROUNDS)  
 const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || "10", 10);
 return bcrypt.hashSync(password, SALT_ROUNDS)
}