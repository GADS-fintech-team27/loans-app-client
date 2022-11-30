import axios from 'axios'
import checkAuth from '../middleware'
export default (app) => {
  const serverUrl = 'http://localhost:8000'
  app.post('/api/create-business', async (req, res) => {
    try {
      console.log('calling the register business endpoint')
      const business = req.body
      const businessReponse = await axios.post(`${serverUrl}/bussiness`, {
        ...business,
      })
      console.log(businessReponse.data)
      res
        .status(businessReponse.data.status_code)
        .json(businessReponse.data.data)
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
