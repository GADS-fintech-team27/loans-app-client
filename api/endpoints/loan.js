import axios from 'axios'
import checkAuth from '../middleware'
export default (app) => {
  const serverUrl = 'http://localhost:8000/'
  app.post('/api/create-loan', checkAuth, async (req, res) => {
    try {
      const loan = req.body
      await axios.post(`${serverUrl}/investor`, { ...loan })
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.get('api/get-loans', async (req, res) => {
    try {
      await axios.get(`${serverUrl}/loans`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.get('api/get-loan:/id', async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/loans:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.delete('api/get-loan:/id', checkAuth, async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/loans:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.put('api/get-loan:/id', checkAuth, async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/loans:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })
}
