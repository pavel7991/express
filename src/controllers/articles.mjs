import { log } from '../utils/logger.mjs'

const getArticlesHandler = (req, res) => {
	log(`HeadersToken: ${req.headers['authorization']}`, 'blue')

	res.status(200)
		.render('articles', {
			title: 'Articles',
			currentPage: 'articles'
		})
}

export { getArticlesHandler }