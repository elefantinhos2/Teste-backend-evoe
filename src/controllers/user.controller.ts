import { Response, Request } from "express";
import createUserService from "../services/createUser.service";
import listUserService from "../services/listUser.service";
import retrieveUserService from "../services/retriveUser.service";
import deleteUserService from "../services/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, age}  = req.body;
        const newUser = await createUserService({name, email, password, age});
        return res.status(201).json(newUser)
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const listUserControllers = async (req: Request, res: Response) => {
    const users = await listUserService()
    return res.json({users: users});
}

const retrieveUserController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
       const user = await retrieveUserService(userId)
        return res.status(200).json(user)
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({
                message: error.message
            })
        }
    }
}

const deleteUserController = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const user = await deleteUserService(userId)
        return res.status(200).json({message: 'User Delete',user})
        /*await deleteUserService(userId)
        return res.status(204).send();*/
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({
                message: error.message
            })
        }
    }
}


export { createUserController, listUserControllers, retrieveUserController, deleteUserController };