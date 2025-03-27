import Router from 'express';
import { createUserController, listUserControllers, retrieveUserController, deleteUserController } from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('', createUserController);

userRoutes.get('', listUserControllers);

userRoutes.get('/:userId', retrieveUserController);

userRoutes.delete('/:userId', deleteUserController);

export default userRoutes;