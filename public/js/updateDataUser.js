import dataFormJson from './dataFormJson.js'
import { clearInputErrors, showValidationErrors } from './formValidation.js'

const updateUserDataBtn = document.getElementById('updateUserData')
const FormUser = document.getElementById('formUser')

const updateDataUser = async () => {

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
		if (err.response.status === 400) {
			showValidationErrors(err.response.data.message)
		} else {
			console.error(err)
			alert('Error update user')
		}
	}
}

updateUserDataBtn.addEventListener('click', (e) => {
	e.preventDefault()
	clearInputErrors()
	updateDataUser().catch()

})