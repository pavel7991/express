import express from 'express'
import {
	deleteUserByIdHandler,
	getAddNewUserHandler,
	getUserByIdHandler,
	getUsersHandler,
	postAddNewUserHandler,
	updateUserHandler
} from '../controllers/users.mjs'
import { validateUserPut } from '../validators/userValidation.mjs'
import { errorValidationUser } from '../middleware/errorValidationUser.mjs'


const usersRouter = express.Router()

usersRouter.route('/')
	.get(getUsersHandler)

usersRouter.route('/add-new-user')
	.get(getAddNewUserHandler)
	.post(validateUserPut, postAddNewUserHandler)

usersRouter.route('/:userId')
	.get(getUserByIdHandler)
	.delete(deleteUserByIdHandler)
	.put(validateUserPut, updateUserHandler)

usersRouter.use(errorValidationUser)

export default usersRouter