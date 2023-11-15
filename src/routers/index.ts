import express from 'express'

import authentications from './authentications'
import users from './users'

const router = express.Router()

router.use(authentications)
router.use(users)

export default router
