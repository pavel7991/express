import Joi from 'joi'

const userSchema = Joi.object({
	name: Joi.string().required().min(3).max(30),
	email: Joi.string().required().email(),
	phone: Joi.string().optional().allow('', null).pattern(/^\+?[0-9\s\-]{7,14}$/),
	avatar: Joi.string().optional().allow('', null).uri(),
	website: Joi.string().optional().allow('', null).uri()
})

const validateUserPost = (req, res, next) => {
	const { error } = userSchema.validate(req.body)
	if (error) {
		res.status(400).send(error.details[0].message)
	}
	next()
}

const validateUserPut = (req, res, next) => {
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

export { validateUserPost, validateUserPut }