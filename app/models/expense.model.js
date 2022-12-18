module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			expenseDate: Date,
			category: String,
			desc: String,
			amount: Number
		},
		{
			timestamp: true
		}
	)

	schema.method("toJSON", function(){
		const {__v, _id, ...object} = this.toObject()
		object.id = _id
		return object
	})

	const Expense = mongoose.model("expenses", schema)
	return Expense
}