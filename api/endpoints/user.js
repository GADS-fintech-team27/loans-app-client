import axios from 'axios'
export default (app) => {
  const authServerUrl = 'http://localhost:8080'
  app.post('/api/auth/sign-in', async (req, res) => {
    console.log('calling the signin endpoint')
    console.log(req.body)
    try {
      const user = req.body
      const accessToken = await axios.post(`${authServerUrl}/auth/sign-in`, {
        ...user,
      })
      res.cookie('accessToken', accessToken.data, {
        maxAge: 3600000,
        secure: false,
        httpOnly: true,
      })
      res.status(204).json({})
    } catch (error) {}
  })

  app.post('/api/auth/sign-up', async (req, res) => {
    try {
      console.log('logging the sign-up endpoint in the BFF')
      const user = req.body
      console.log(user)
      await axios.post(`${authServerUrl}/auth/sign-up`, { ...user })
      res.status(204).json({})
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.get('/user', async (req, res) => {
    try {
      const user = req.body
      await axios.get(`${authServerUrl}/auth`, { ...user })
    } catch (error) {}
  })
}
