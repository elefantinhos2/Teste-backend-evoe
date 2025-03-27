import { IUserresponse } from "../interfaces"
import AppDataSource from "../data-source"
import { User } from "../entities/user.entity" 
import { hash } from "bcryptjs"

const updateUserService = async ({  name, email, password, age, id: userId}: IUserresponse): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        age,
        ativo: true
    })

    await userRepository.update(userId,{name: name, email: email, password: hashedPassword, age: age})
    
    return user

}

export default updateUserService;