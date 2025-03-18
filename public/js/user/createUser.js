import dataFormJson from '../utils/dataFormJson.js'
import { clearInputErrors, showValidationErrors } from '../validation/formValidation.js'

const createUserBtn = document.getElementById('createUserBtn')
const FormUser = document.getElementById('formCreateUser')

const createUser = async () => {

	const url = window.location.pathname

	try {
		const res = await axios.post(url, dataFormJson(FormUser), {
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (res.status === 200) {
			document.open()
			document.write(res.data)
			document.close()
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

createUserBtn.addEventListener('click', (e) => {
	e.preventDefault()
	clearInputErrors()
	createUser().catch()
})