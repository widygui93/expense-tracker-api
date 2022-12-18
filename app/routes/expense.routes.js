module.exports = app => {
	const expenses = require('../controllers/expense.controller')
	const router = require('express').Router()

	router.post('/', expenses.create)
	router.get('/', expenses.findAll)
	router.put('/:id', expenses.update)

	app.use('/api/expenses', router)
}