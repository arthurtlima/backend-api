import { register, login } from '../controllers/auth'

import createRouter from '../helpers/router'

const router = createRouter()

router.post('/auth/register', register)
router.post('/auth/login', login)

export default router
