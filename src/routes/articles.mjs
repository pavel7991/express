import express from 'express'
import { getArticlesHandler } from '../controllers/articles.mjs'
import basicAuth from '../middleware/basicAuth.mjs'

const articlesRouter = express.Router()

articlesRouter.route('/')
	.get(basicAuth, getArticlesHandler)


export default articlesRouter