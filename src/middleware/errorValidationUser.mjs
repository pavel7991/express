import { log } from '../config/logger.mjs'

export const errorValidationUser = (err, req, res, next) => {
	log(`StatusCode:${err.statusCode}; Error field: ${JSON.stringify(err.message)};`, 'blue')
	res.status(err.statusCode).json({ message: err.message })
}