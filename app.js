const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded())

const db = require('./app/models/')
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(()  => {
		console.log('Database connected')
	})
	.catch(err => {
		console.log(err)
		console.error('Database not connected')
		process.exit()
	})

// app.get('/', (req, res) => {
// 	res.send('hello user')
// })

require('./app/routes/expense.routes')(app)

app.listen('8080', () => {
	console.log('server is listening on port 8080')
})