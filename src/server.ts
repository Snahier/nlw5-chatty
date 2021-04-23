import express from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"
import "./database"
import { routes } from "./routes"

const app = express()

const http = createServer(app) // Create HTTP server
const io = new Server(http) // Create WebSocket server

io.on("connection", (socket: Socket) => {
  console.log("Connected", socket.id)
})

// Express middlewares
app.use(express.json())
app.use(routes)

http.listen(3333, () => console.log("listening on http://localhost:3333"))
