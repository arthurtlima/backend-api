import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import dotEnv from 'dotenv'

import router from './router'

dotEnv.config()

const app = express()

app.use(
  cors({
    credentials: true,
  }),
)

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`)
})

const mongoURL = process.env.MONGO_URL

mongoose.Promise = Promise
mongoose.connect(mongoURL)
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())
