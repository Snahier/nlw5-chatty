import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"

export class UsersService {
  constructor(
    private usersRepository: Repository<User> = getCustomRepository(
      UserRepository
    )
  ) {}

  async create(email: string) {
    const user = await this.usersRepository.findOne({ email })

    if (user) return user

    const newUser = this.usersRepository.create({
      email,
    })

    await this.usersRepository.save(newUser)

    return newUser
  }
}
