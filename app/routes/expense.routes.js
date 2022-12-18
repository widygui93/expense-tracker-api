module.exports = app => {
	const expenses = require('../controllers/expense.controller')
	const router = require('express').Router()

	router.post('/', expenses.create)
	router.get('/', expenses.findAll)

	app.use('/api/expenses', router)
}