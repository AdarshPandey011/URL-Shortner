import {Router} from 'express';
import { signup } from '../controllers/Auth/signup';
import { login } from '../controllers/Auth/login';
const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
export default userRouter;
