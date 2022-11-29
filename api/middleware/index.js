import { verify } from 'jsonwebtoken'
export default function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = verify(token, process.env.JWT_SECRET_KEY)
    req.user = decodedToken
    next()
  } catch (error) {
    // res.status(401).json({ errorMessage: 'unathorised ' })
  }
}
