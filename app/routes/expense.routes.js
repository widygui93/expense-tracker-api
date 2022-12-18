module.exports = app => {
	const expenses = require('../controllers/expense.controller')
	const router = require('express').Router()

	router.post('/', expenses.create)

	app.use('/api/expenses', router)
}