/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import UserController from '../resources/user/user.controller';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/signin', userController.signin);
userRouter.post('/signup', userController.signup);

export default userRouter;
