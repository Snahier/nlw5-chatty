import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
  admin_id?: string
  text: string
  user_id: string
}

export class MessagesService {
  constructor(
    private messagesRepository: Repository<Message> = getCustomRepository(
      MessagesRepository
    )
  ) {}

  async create({ admin_id, text, user_id }: IMessageCreate) {
    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id,
    })

    await this.messagesRepository.save(message)

    return message
  }

  async listByUserId(user_id: string) {
    const messageList = await this.messagesRepository.find({
      where: { user_id },
      relations: ["user"],
    })

    return messageList
  }
}
