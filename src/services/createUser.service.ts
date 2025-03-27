import { IUserRequest } from "../interfaces"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import { hash } from "bcryptjs"

const createUserService = async ({ name, email, password, age }: IUserRequest): Promise<User> => {

    if(!name || !email || !password || !age) {
        throw new Error("Illegal arguments");   
    }

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        age,
        ativo: true
    })

    await userRepository.save(user)

    const userResponse = userRepository.create({
        name,
        email,
        age,
    })

    return userResponse

}

export default createUserService;