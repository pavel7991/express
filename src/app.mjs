import express from 'express'
import router from './routes/index.mjs'

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public')) // Подключаем папку с CSS

app.use(router)


app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})