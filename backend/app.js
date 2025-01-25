require("./config/db")
require ("dotenv").config()
const express = require("express")
const userRouter = require("./routes/auth.route")
const articleRouter = require("./routes/article.route")
const cors = require("cors");
require("./models")

const app = express()

const corsOption = {
    origin : 'http://localhost:3000',
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials : true,
    allowedHeaders: ["Content-Type", "Authorization"]
}
app.use(cors(corsOption))

app.use(express.json())

app.use("/auth", userRouter)
app.use("/article", articleRouter)

const PORT = process.env.PORT || 4005
app.listen(PORT, () => console.log("server start"))