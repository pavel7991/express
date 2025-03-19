import { userSchema } from '../schemas/userSchema.mjs'
import { log } from '../utils/logger.mjs'

const validateUserData = (req, res, next) => {
	const { error } = userSchema.validate(req.body, { abortEarly: false })

	if (error) {
		const objMessage = {}

		error.details.forEach(err => {
			const label = err.context.label
			objMessage[label] = err.message.replace(`\"${label}\"`, '').trim()
		})

		const err = {
			statusCode: 400,
			message: objMessage
		}
		return next(err)
	}
	next()
}

const handleValidationErrors = (err, req, res, next) => {
	log(`StatusCode:${err.statusCode}; Error field: ${JSON.stringify(err.message)};`, 'blue')
	res.status(err.statusCode).json({ message: err.message })
}

export { validateUserData, handleValidationErrors }