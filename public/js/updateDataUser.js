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
		if (err.status === 400) {
			console.log(err.response.data.message)
		} else {
			console.error(err)
			alert('Error update user')
		}
	}
}

updateUserDataBtn.addEventListener('click', updateDataUser)