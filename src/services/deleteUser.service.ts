import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"

const deleteUserService = async(userId: string): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: userId})

    if(!user){
        throw new Error("User not found")
    }

    //Podemos também desativar o usuario e evitar um hard Delete
    /*
    if(!user.ativo){
        throw new Error("Inactive user")
    }

    user.ativo = false
    await userRepository.save(user)
    */

    await userRepository.delete({id: userId});

    return user;

}

export default deleteUserService