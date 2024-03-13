import { Router } from 'express'
import { handleLogin, handleProfile } from '../controllers/auth.controller'
import { requireAuth } from '../middlewares/requireAuth'

const router = Router()

// Rutas

router.post('/login', handleLogin)

router.get('/profile', requireAuth,  handleProfile )

export default router