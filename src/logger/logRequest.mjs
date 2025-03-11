export const logRequests = (req, res, next) => {
	console.log(`${new Date().toLocaleTimeString()} | Method:[${req.method}] | Url:[${req.originalUrl}] | Status Code:[${res.statusCode}]`)
	next()
}


