import axios from 'axios'
import checkAuth from '../middleware'
export default (app) => {
  app.post('/api/create-business', checkAuth, async (req, res) => {
    const serverUrl = 'http://localhost:8000/'
    try {
      const business = req.body
      await axios.post(`${serverUrl}/bussiness`, { ...business })
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.get('/api/get-businesses', async (req, res) => {
    try {
      console.log('calling the get business end point')
      const business = await axios.get(`${serverUrl}/bussiness/`)
      res.status(business.data.status_code).json(business.data)
    } catch (error) {
      console.log('call has failed')
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.get('/api/get-bussiness:/id', async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/bussiness:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.delete('api/get-bussiness:/id', checkAuth, async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/bussiness:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.put('api/get-bussiness:/id', checkAuth, async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/bussiness:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })
}
