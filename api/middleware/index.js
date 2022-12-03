import { verify } from 'jsonwebtoken'
export default async function checkAuth(req, res, next) {
  try {
    const token = req.headers['authorization'] || req.headers['x-access-token']
    console.log(token)
    if (!token) return res.status(401).send('Access denied. No token provided.')
    const decodedToken = await verify(token, 'secret')
    req.user = decodedToken
    next()
  } catch (error) {
    res.status(400).send('Invalid token.')
  }
}
