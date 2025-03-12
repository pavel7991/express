import express from 'express'
import {
	deleteUserByIdHandler,
	getAddNewUserHandler,
	getUserByIdHandler,
	getUsersHandler,
	postAddNewUserHandler,
	updateUserHandler
} from '../controllers/users.mjs'

const usersRouter = express.Router()

usersRouter.route('/')
	.get(getUsersHandler)

usersRouter.route('/add-new-user')
	.get(getAddNewUserHandler)
	.post(postAddNewUserHandler)

usersRouter.route('/:userId')
	.get(getUserByIdHandler)
	.delete(deleteUserByIdHandler)
	.put(updateUserHandler)


export default usersRouter