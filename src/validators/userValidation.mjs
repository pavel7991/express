import Joi from 'joi'

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

export { validateUserPost }