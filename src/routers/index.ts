import authentications from './authentications'
import users from './users'

import createRouter from '../helpers/router'

const router = createRouter()

router.use(authentications)
router.use(users)

export default router
