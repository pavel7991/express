const basicAuth = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401)
			.render('auth', {
				title: 'Sing In',
				currentPage: 'login'
			})
	}
	next()
}

export default basicAuth