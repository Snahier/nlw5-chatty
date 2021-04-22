import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

export class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UserRepository)

    const user = await usersRepository.findOne({ email })

    if (user) return user

    const newUser = usersRepository.create({
      email,
    })

    await usersRepository.save(newUser)

    return newUser
  }
}
