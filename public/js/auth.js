const btn = document.getElementById('auth-btn')

const username = 'admin'
const password = '12345'

const basicAuthToken = btoa(`${username}:${password}`)


const imitationAuth = async () => {
	const url = window.location.pathname

	try {
		const res = await axios.get(url, {
			headers: {
				Authorization: basicAuthToken
			}
		})

		if (res.status === 200) {
			document.open()
			document.write(res.data)
			document.close()
		}
	} catch (error) {
		console.error(error)
	}
}

btn.addEventListener('click', imitationAuth)