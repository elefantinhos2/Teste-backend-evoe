import Router from 'express';
import { createUserController, listUserControllers, retrieveUserController, deleteUserController, updateUserController } from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('', createUserController);

userRoutes.get('', listUserControllers);

userRoutes.get('/:userId', retrieveUserController);

userRoutes.delete('/:userId', deleteUserController);

userRoutes.patch('/:userId', updateUserController);

export default userRoutes;