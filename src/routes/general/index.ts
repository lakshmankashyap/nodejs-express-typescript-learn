import express from 'express'
import General from '../../controllers/general'

const router = express.Router()

router.get('/', General.index)

/**
 * @swagger
 * /ping:
 *  get:
 *    summary: Simple api test
 *    tags:
 *      - General
 *    responses:
 *      200:
 *        description: Returns a {message:"pong"}
 */
router.get('/ping', General.ping)

export default router
