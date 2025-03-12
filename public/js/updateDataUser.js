import dataFormJson from './dataFormJson.js'

const updateUserDataBtn = document.getElementById('updateUserData')
const FormUser = document.getElementById('formUser')

const updateDataUser = async (e) => {
	e.preventDefault()
	const url = window.location.pathname

	try {
		const res = await axios.put(url, dataFormJson(FormUser), {
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (res.status === 200) {
			alert(res.data.message)
			window.location.reload()
		}
	} catch (err) {
		console.error(err)
		alert('Error updating user data')
	}
}

updateUserDataBtn.addEventListener('click', updateDataUser)