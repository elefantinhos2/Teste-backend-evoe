import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"

const retrieveUserService = async(userId: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: userId})

    if(!user){
        throw new Error("User not found")
    }

    if(!user.ativo){
        throw new Error("Inactive user")
    }

    return user;

}

export default retrieveUserService;