import { log } from '../utils/logger.mjs'
import { addNewUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../models/users.mjs'

// users
export const getUsersHandler = (req, res) => {
	res.render(
		'users', {
			title: 'Users',
			currentPage: 'users',
			usersList: getAllUsers()
		})
}

// users/userId
export const getUserByIdHandler = (req, res) => {
	const { userId } = req.params
	const userData = getUserById(userId)

	res.render('user', {
		title: `User ${userId} `,
		currentPage: 'users',
		userData
	})
}

// add-new-user
export const getAddNewUserHandler = (req, res) => {
	res.render('addNewUser', {
		title: 'Add new user',
		currentPage: 'users'
	})
}

// POST
export const postAddNewUserHandler = (req, res) => {
	const { name, email, phone, avatar, website } = req.body

	const newUser = addNewUser({ name, email, phone, avatar, website })
	log(`New user add! id:${newUser.id}, name:${newUser.name}`, 'green')

	res.render('userSuccessAdd', {
		title: 'User added',
		currentPage: 'users',
		newUser
	})
}

// DELETE
export const deleteUserByIdHandler = (req, res) => {
	const { userId } = req.params

	deleteUserById(userId)
	log('User deleted', 'red')

	res.status(200)
		.json({ message: `User by id:${userId} was remove` })
}

// UPDATE
export const updateUserHandler = (req, res) => {
	const { userId } = req.params
	const dataFromForm = req.body

	updateUserById(userId, dataFromForm)
	log(`User id:${userId}, updated`, 'green')

	res.status(200)
		.json({ message: `User by id:${userId}, updated` })
}