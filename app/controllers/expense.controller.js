const db = require('../models')
const Expense = db.expenses

exports.create = (req, res) => {
	const expense = new Expense({
		expenseDate: req.body.expenseDate,
		category: req.body.category,
		desc: req.body.desc,
		amount: req.body.amount
	})

	expense.save()
			.then(result => res.send(result) )
			.catch(err => {
				res.status(409).send({
					message: err.message || "some error while creating an expense"
				})
			})
}