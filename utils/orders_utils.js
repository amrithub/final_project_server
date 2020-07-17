const fs = require('fs');
const path = require('path');
const Order = require('../models/order')

// Exported functions

// get all Orders
const getAllOrders = function (req) {
  return Order.find()
};

const getOrderById = function(req) {
	return Order.findById(req.params.id)
}

const addOrder = function (req) {
    let date = Date.now();
    // Set dates for this new Order
    req.body.create_date = date;
    req.body.modified_date = date;
    return new Order(req.body);
};

// deleteOrder
// delete Order
// returns a query
// const deleteOrder = function(id) {
// 	return Order.findByIdAndRemove(id)
// }
// // update Order
// // returns a query
// const updateOrder = function (req) {
//     req.body.modified_date = Date.now();
//     // use new:true to return the updated Order rather than the original Order when the query is executed
//     return Order.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     });
// };

// helper for testing
function loadData(file) {
	dataFile = file
	dishOrders = JSON.parse(fs.readFileSync(file, 'utf8'))
}

// helper function to generate unique id
function getNextId() {
	let ids = Object.keys(dishOrders).sort()
	let lastId = (ids.length > 0) ? ids[ids.length-1] : 0
	return parseInt(lastId) + 1
}

module.exports = {getAllOrders, getOrderById, loadData, addOrder}