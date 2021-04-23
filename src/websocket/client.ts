import { Socket } from "socket.io"
import { io } from "../http"

io.on("connection", (socket: Socket) => {
  console.log("Se conectou", socket.id)
})
