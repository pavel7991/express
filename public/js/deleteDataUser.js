const deleteCardBtn = document.getElementById('deleteUserData')

const deleteDataUser = async () => {
	const url = window.location.pathname

	try {
		const response = await axios.delete(url)

		if (response.status === 200) {
			alert(response.data.message)
			window.location.replace('/users')
		}
	} catch (err) {
		console.error(err)
		alert('An error occurred while deleting the user')
	}
}

deleteCardBtn.addEventListener('click', deleteDataUser)