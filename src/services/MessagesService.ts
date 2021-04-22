import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
  admin_id?: string
  text: string
  user_id: string
}

export class MessagesService {
  async create({ admin_id, text, user_id }: IMessageCreate) {
    const messagesRepository = getCustomRepository(MessagesRepository)

    const message = messagesRepository.create({
      admin_id,
      text,
      user_id,
    })

    await messagesRepository.save(message)

    return message
  }

  async listByUserId(user_id: string) {
    const messagesRepository = getCustomRepository(MessagesRepository)

    const messageList = await messagesRepository.find({
      where: { user_id },
      relations: ["user"],
    })

    return messageList
  }
}
