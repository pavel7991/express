import express from 'express'
import {
	deleteUserByIdHandler,
	getAddNewUserHandler,
	getUserByIdHandler,
	getUsersHandler,
	postAddNewUserHandler,
	updateUserHandler
} from '../controllers/users.mjs'

import { handleValidationErrors, validateUserData } from '../middleware/validateUserData.mjs'


const usersRouter = express.Router()

usersRouter.route('/')
	.get(getUsersHandler)

usersRouter.route('/add-new-user')
	.get(getAddNewUserHandler)
	.post(validateUserData, postAddNewUserHandler)

usersRouter.route('/:userId')
	.get(getUserByIdHandler)
	.delete(deleteUserByIdHandler)
	.put(validateUserData, updateUserHandler)

usersRouter.use(handleValidationErrors)

export default usersRouter