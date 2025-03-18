import Joi from 'joi'

export const userSchema = Joi.object({
	name: Joi.string().required().min(3).max(30),
	email: Joi.string().required().email(),
	phone: Joi.string().optional().allow('', null).pattern(/^\+?[0-9\s\-]{7,14}$/),
	avatar: Joi.string().optional().allow('', null).uri(),
	website: Joi.string().optional().allow('', null).uri()
})