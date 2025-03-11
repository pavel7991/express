import express from 'express'
import rootRouter from './root.mjs'
import usersRouter from './users.mjs'
import { notFoundHandler } from '../controllers/notFound.mjs'
import { logRequests } from '../logger/logRequest.mjs'

const router = express.Router()

router.use(logRequests)
router.use('/', rootRouter)
router.use('/users', usersRouter)


router.use(notFoundHandler)


export default router