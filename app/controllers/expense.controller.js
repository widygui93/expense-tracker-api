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

exports.findAll = (req, res) => {
	Expense.find()
			.then( result => res.send(result))
			.catch(err => {
				res.status(500).send({
					message: err.message || "some error while retrieving expenses"
				})
			})
}

exports.update = (req, res) => {
	const id = req.params.id

	Expense.findByIdAndUpdate(id,{
		expenseDate: req.body.expenseDate,
		category: req.body.category,
		desc: req.body.desc,
		amount: req.body.amount
	})
	.then(result => {
		if(!result){
			res.status(404).send({
				message: "expense not found"
			})
		}

		res.send({message: "expense was updated"})
	})
	.catch(err => {
		res.status(409).send({
			message: err.message || "some error while updating an expense"
		})
	})
}

exports.delete = (req, res) => {
	const id = req.params.id

	Expense.findByIdAndRemove(id)
	.then(result => {
		if(!result){
			res.status(404).send({
				message: "expense not found"
			})
		}

		res.send({message: "expense was deleted"})
	})
	.catch(err => {
		res.status(409).send({
			message: err.message || "some error while deleting an expense"
		})
	})
}