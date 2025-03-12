const dataFormJson = (form) => {
	const formData = new FormData(form)
	const data = {}

	formData.forEach((value, key) => data[key] = value)
	return JSON.stringify(data)
}

export default dataFormJson