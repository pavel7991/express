export const notFoundHandler = (req, res, next) => {
	res.status(404)
		.render('notFound', {
			title: 'Error 404',
			currentPage: ''
		})
}