import { counter, dataUsers } from '../data/users.mjs'
import { findObjectById, removeObjectById } from '../utils/arrayUtils.mjs'

export const getAllUsers = () => dataUsers
export const getUserById = (userId) => findObjectById(dataUsers, userId)

export const addNewUser = ({ name, email, phone, avatar, website }) => {
	const newUser = {
		id: ++counter.id,
		name,
		email,
		phone,
		avatar,
		website
	}
	dataUsers.push(newUser)
	return newUser
}

export const deleteUserById = (userId) => removeObjectById(dataUsers, userId)

export const updateUserById = (userId, updatedData) => {
	const user = findObjectById(dataUsers, userId)
	Object.assign(user, updatedData)
}