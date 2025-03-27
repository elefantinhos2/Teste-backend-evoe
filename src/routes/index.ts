import Router from 'express';
import { createUserController, listUserControllers } from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('', createUserController);

userRoutes.get('', listUserControllers);

export default userRoutes;