import axios from 'axios'
import checkAuth from '../middleware'
export default (app) => {
  const serverUrl = 'http://localhost:8000'
  app.post('/api/create-investor', async (req, res) => {
    try {
      const investor = req.body
      const registerdInvestor = await axios.post(`${serverUrl}/investor`, {
        ...investor,
      })
      res
        .status(registerdInvestor.data.status_code)
        .json(registerdInvestor.data.data)
    } catch (error) {
      res.status(500).json({
        errorMessage: 'an error has occured while creating an investor',
      })
    }
  })

  app.get('/api/get-investors', async (req, res) => {
    try {
      const investors = await axios.get(`${serverUrl}/investor/`)
      res.status(investors.data.status_code).json(investors.data)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.get('api/get-investor:/id', async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/investor:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.delete('api/get-investor:/id', checkAuth, async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/investor:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })

  app.put('api/get-investor:/id', checkAuth, async (req, res) => {
    try {
      const id = req.params.id
      await axios.get(`${serverUrl}/investor:/${id}`)
    } catch (error) {
      res.status(500).json({ errorMessage: 'internal server error ' })
    }
  })
}
