import express from "express"
import { createServer } from "http"
import path from "path"
import { Server, Socket } from "socket.io"
import "./database"
import { routes } from "./routes"

const app = express()
app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html")
})

const http = createServer(app) // Create HTTP server
const io = new Server(http) // Create WebSocket server

io.on("connection", (socket: Socket) => {
  console.log("Connected", socket.id)
})

// Express middlewares
app.use(express.json())
app.use(routes)

http.listen(3333, () => console.log("listening on http://localhost:3333"))
