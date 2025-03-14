import express from 'express'
import router from './routes/index.mjs'
import { log, logRequests } from './config/logger.mjs'
import { notFoundHandler } from './controllers/notFound.mjs'

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true })) // Для application/x-www-form-urlencoded
app.use(express.json()) // Для JSON

app.use(logRequests)

app.use(router)

app.use(notFoundHandler)

app.listen(PORT, () => {
	log(`Server is listening on port ${PORT}`, 'bgWhite')
})