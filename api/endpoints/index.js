import business from './business'
import investor from './investor'
import loan from './loan'
import user from './user'

export default (app) => {
  business(app)
  investor(app)
  loan(app)
  user(app)
  app.get('/test', (req, res) => {
    res.json({ message: 'testing end point' })
  })
}
