import dotenv from "dotenv"
import "express-async-errors"

import accessLogMiddleware from "./middlewares/logger.middleware.js"
import routes from "./routes/api.js"

import express, { json } from "express"
import cors from "cors"

const app = express()
dotenv.config()
app.use(cors())

app.use(json())

// Req and Res logger.
app.use(accessLogMiddleware)

app.use("/", routes)

export default app
