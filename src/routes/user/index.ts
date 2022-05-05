import express from 'express'
import User from '../../controllers/user'
import auth from '../../middleware/auth'

const router = express.Router()

router.get('/', User.index)
router.post('/register', User.create)
router.get('/:id', User.show)
router.post('/signin', User.loggedUser)

router.patch('/:id', User.update)
router.delete('/:id', User.deleteUser)

// dev only
router.delete('/deleteAllUsers', User.deleteAll)

export default router
