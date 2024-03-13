import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  
  const authHeader = req.headers.authorization // Bearer 123authtokenqwertyqwertyetc

  // Step 1 vlidate if header auth Bearer is exist
  if(!authHeader) return res.status(401).json({ message: "Unauthorized access"})

  // Step 2 extract token: 'Bearer asdasdasdasd' to = ['Bearer', 'asdasdasd']
  const token = authHeader.split(' ')[1]

  // Step 3 token
  if(!token) return res.status(401).json({ message: "Invalid token" })

  // Step 4 validate token is valid
  jwt.verify(token, 'secret', (err, payload) => {
    if(err) return res.status(401).json({ message: "Unauthorized " })

    // console.log(payload)

    req.user = payload// require create types/payload.d.ts

  })

  next()

}
 