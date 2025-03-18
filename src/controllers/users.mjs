import { counter, dataUsers } from '../data/users.mjs'
import { log } from '../helpers/logger.mjs'
import { findObjectById, removeObjectById } from '../utils/arrayUtils.mjs'

// users
export const getUsersHandler = (req, res) => {
	res.render('users', { title: 'Users', currentPage: 'users', usersList: dataUsers })
}

// users/userId
export const getUserByIdHandler = (req, res) => {
	const { userId } = req.params
	const userData = findObjectById(dataUsers, userId)

	res.render('user', { title: `User ${userId} `, currentPage: 'users', userData })
}

// DELETE
export const deleteUserByIdHandler = (req, res) => {
	const { userId } = req.params

	removeObjectById(dataUsers, userId)
	log('User deleted', 'red')
	res.status(200).json({ message: `User by id:${userId} was remove` })
}

// UPDATE
export const updateUserHandler = (req, res) => {
	const { userId } = req.params
	const dataFromForm = req.body

	const user = findObjectById(dataUsers, userId)
	Object.assign(user, dataFromForm)

	log(`User id:${userId}, updated`, 'green')
	res.status(200).json({ message: `User by id:${userId}, updated` })
}

// add-new-user
export const getAddNewUserHandler = (req, res) => {
	res.render('addNewUser', { title: 'Add new user', currentPage: 'users' })
}

// POST
export const postAddNewUserHandler = (req, res) => {
	const { name, email, phone, avatar, website } = req.body

	let newUser = {
		id: ++counter.id,
		name,
		email,
		phone,
		avatar,
		website
	}
	dataUsers.push(newUser)
	log(`New user add! id:${newUser.id}, name:${newUser.name}`, 'green')
	res.render('userSuccessAdd', { title: 'User added', currentPage: 'users', newUser })
}