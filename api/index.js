import express from 'express'
import helmet from 'helmet'
import middleware from './middleware'
import endpoints from './endpoints'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export default function (_options) {
  const app = express()

  app.use(helmet.hidePoweredBy())
  app.use(cors())
  app.use(express.json())
  app.use(cookieParser())

  middleware(app)
  endpoints(app)

  this.options.serverMiddleware.unshift(app)
}
