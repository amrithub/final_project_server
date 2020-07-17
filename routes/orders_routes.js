const express = require('express')
const router = express.Router()
const {
    getOrders,
    getOrder,
    makeOrder,
    // removeOrder,
    // changeOrder,
    userAuthenticated,
    verifyOwner
} = require('../controllers/orders_controller')

// READ
// GET on '/posts'
// Returns all posts
router.get('/', getOrders)

// READ
// GET on '/Orders/:id'
// Returns Order with given id
router.get('/:id', getOrder)

// For Order, delete, put -require authenticated user
router.use(userAuthenticated)
// CREATE
// Order on '/Orders'
// Creates a new Order
router.post('/', makeOrder)

// DELETE
// DELETE on '/Orders/:id'
// Deletes a Order with id
// router.delete('/:id', removeOrder)

// // UPDATE
// // PUT on 'Orders/:id'
// // Updates a Order with id
// router.put('/:id', changeOrder)

module.exports = router