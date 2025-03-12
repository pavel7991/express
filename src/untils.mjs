export const findUsersById = (arr, id) => arr.find(user => user.id === +id)

export const deleteUserDataById = (arr, id) => {
	const index = arr.findIndex(user => user.id === +id)
	if (index !== -1) {
		arr.splice(index, 1)
	}
}

