import express from 'express'
import helmet from 'helmet'
import middleware from './middleware'
import endpoints from './endpoints'

export default function (_options) {
  const app = express()

  app.use(helmet.hidePoweredBy())
  app.use(express.json())

  middleware(app)
  endpoints(app)

  this.options.serverMiddleware.unshift(app)
}
