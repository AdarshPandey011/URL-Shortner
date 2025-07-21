import {Router} from "express"
import {signup} from "../controllers/Auth/signup"
const userRouter = Router()

userRouter.post("/signup",signup)


export default userRouter;