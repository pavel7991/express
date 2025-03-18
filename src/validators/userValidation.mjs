import Joi from 'joi'
import { log } from '../config/logger.mjs'

const userSchema = Joi.object({
	name: Joi.string().required().min(3).max(30),
	email: Joi.string().required().email(),
	phone: Joi.string().optional().allow('', null),
	avatar: Joi.string().optional().allow('', null),
	website: Joi.string().optional().allow('', null)
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
		log(objMessage, 'red')

		const err = {
			statusCode: 400,
			message: objMessage
		}
		return next(err)
	}
	next()
}


export { validateUserPost, validateUserPut }