import express from 'express'
import rootRouter from './root.mjs'
import usersRouter from './users.mjs'

const router = express.Router()

router.use('/', rootRouter)
router.use('/users', usersRouter)


export default router