export const clearInputErrors = () => {
	const errorMessages = document.querySelectorAll('.err-msg')
	const inputGroups = document.querySelectorAll('.input-group')

	errorMessages.forEach(errorMessage => errorMessage.textContent = '')
	inputGroups.forEach(inputGroup => inputGroup.classList.remove('error'))
}

export const showValidationErrors = (errors) => {
	for (const key in errors) {
		const inputGroup = document.getElementById(`${key}-input-group`)
		const errorSpan = inputGroup.querySelector('span')
		
		inputGroup.classList.add('error')
		errorSpan.textContent = errors[key]
	}
}