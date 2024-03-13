import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const handleLogin = (req: Request, res: Response) => {

  // process the request body: req.body = {email: 'user@example.com, password: 'password: '123'}

  // validate the email and password from validation parameters: express-vaidator, jpi, zod

  // store in database: mongo, pg, mysql, etc...

  // generate an token: json-jsonwebtoken = qwertyqwertyqwertyetc

  const token = jwt.sign({ // emal:'',  username: '', picture: '', etl: ''
    test: "test"
  }, 'secret', { // key random large string
    expiresIn: 60 * 60 * 24 // token exprires in 24hs
  })

  return res.json({
    token: token
  })

}

export const handleProfile = (req: Request, res: Response) => {
  
  return res.json({
    profile: req.user,
    message: "Profile data"
  })
}