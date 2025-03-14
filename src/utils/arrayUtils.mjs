export const findObjectById = (arr, id) => arr.find(user => user.id === +id)

export const removeObjectById = (arr, id) => {
	const index = arr.findIndex(user => user.id === +id)
	if (index !== -1) {
		arr.splice(index, 1)
	}
}

