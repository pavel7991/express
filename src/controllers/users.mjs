//users
import { dataUsers } from '../data/users.mjs'

export const getUsersHandler = (req, res) => {
	res.render('users', { title: 'Users', currentPage: 'users', usersList: dataUsers })
}

// users/userId

const findUsersById = (arr, id) => arr.find(user => user.id === +id)

export const getUserByIdHandler = (req, res) => {
	const { userId } = req.params
	const userData = findUsersById(dataUsers, userId)

	res.render('user', { title: `User ${userId} `, currentPage: 'users', userData })
}


// add-new-user

export const getAddNewUserHandler = (req, res) => {
	res.render('addNewUser', { title: 'Add new user', currentPage: 'users' })
}

export const postAddNewUserHandler = (req, res) => {
	res.end('Post Users Route')
}

