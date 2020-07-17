const {
    getAllOrders,
    getOrderById,
    addOrder
    // deleteOrder,
    // updateOrder
} = require('../utils/orders_utils');


const getOrders = function (req, res) {
    // execute the query from getAllOrders
    getAllOrders(req).
    sort({
        modified_date: -1
    }).
    exec((err, orders) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.send(orders);
    });
};

const getOrder = function (req, res) {
    // execute the query from getOrderById
    getOrderById(req).exec((err, order) => {
        if (err) {
            res.status(400);
            return res.send("Order not found");
        }
        res.send(prder);
    });
};

const makeOrder = function (req, res) {
    // add the username from req.user
   // req.body.username = req.user.username;
   if (req.user.role === 'admin'){
    // save the Post instance from addPost
    addOrder(req).save((err, order) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.status(201);
        res.send(order);
    });}
};

// const removePost = function (req, res) {
//     if (req.user.role === 'admin'){
//     // Check for error from middleware
//     if (req.error) {
//         res.status(req.error.status);
//         res.send(req.error.message);
//     } else {
//         // execute the query from deletePost
//         deletePost(req.params.id).exec((err) => {
//             if (err) {
//                 res.status(500);
//                 return res.json({
//                     error: err.message
//                 });
//             }
//             res.sendStatus(204);
//         });}
//     }
// };

// const changePost = function (req, res) {
//     // Check for error from middleware
//     if (req.error) {
//         res.status(req.error.status);
//         res.send(req.error.message);
//     } else {
//         // execute the query from updatePost
//         updatePost(req).exec((err, post) => {
//             if (err) {
//                 res.status(500);
//                 return res.json({
//                     error: err.message
//                 });
//             }
//             res.status(200);
//             res.send(post);
//         });
//     }
// };

// const changePost = function (req, res) {
//     if (req.user.role === 'admin'){
//     // Check for error from middleware
//     if (req.error) {
//         res.status(req.error.status);
//         res.send(req.error.message);
//     } else {
//         // execute the query from updatePost
//         updatePost(req).exec((err, post) => {
//             if (err) {
//                 res.status(500);
//                 return res.json({
//                     error: err.message
//                 });
//             }
//             res.status(200);
//             res.send(post);
//         });}
//     }
// };

// middleware functions
const userAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(403);
    }
}

const verifyOwner = function (req, res, next) {
    // If post owner isn't currently logged in user, send forbidden

    if (req.user.role === 'admin') {
        next();
    } else {
        getOrderById(req).exec((err, order) => {
            if (err) {
                req.error = {
                    message: 'Post not found',
                    status: 404
                }
                next();
            }
            if (req.user.username !== order.username) {
                req.error = {
                    message: 'You do not have permission to modify this post',
                    status: 403
                };
            }
            next();
        });
    }
}

module.exports = {
    getOrders,
    getOrder,
    makeOrder,
    // removeOrder,
    // changeOrder,
    userAuthenticated,
    verifyOwner
};