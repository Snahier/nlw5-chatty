import express from "express"

const app = express()

// Express middlewares
app.use(express.json())

app.listen(3333, () => console.log("listening on http://localhost:3333"))
