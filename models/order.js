const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define Order schema
const Order = new Schema({
	title: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		required: true
	},
	modified_date: {
		type: Date,
		required: true
	},
	username: {
		type: String,
		required: true
    },
    // address: {
    //     type:String,
    //     required: true
    // },
	content: {
		type: String,
		required: true
	},
	category: String
})
module.exports = mongoose.model("Order", Order)