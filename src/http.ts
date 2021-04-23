import express from "express"
import { createServer } from "http"
import path from "path"
import { Server } from "socket.io"
import "./database"
import { routes } from "./routes"

const app = express()
app.use(express.static(path.join(__dirname, "..", "public")))
app.set("views", path.join(__dirname, "..", "public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

const http = createServer(app) // Create HTTP server
const io = new Server(http) // Create WebSocket server

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html")
})

// Express middlewares
app.use(express.json())
app.use(routes)

export { http, io }
