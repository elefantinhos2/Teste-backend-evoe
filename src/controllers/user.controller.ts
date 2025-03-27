import { Response, Request } from "express";
import createUserService from "../services/createUser.service";
import listUserService from "../services/listUser.service";

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