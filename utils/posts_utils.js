const fs = require('fs');
const path = require('path');
const Post = require('../models/post')

// Exported functions

// get all posts
const getAllPosts = function (req) {
  return Post.find()
};

const getPostById = function(req) {
	return Post.findById(req.params.id)
}

const addPost = function (req) {
    let date = Date.now();
    // Set dates for this new post
    req.body.create_date = date;
    req.body.modified_date = date;
    return new Post(req.body);
};

// deletePost
// delete post
// returns a query
const deletePost = function(id) {
	return Post.findByIdAndRemove(id)
}
// update post
// returns a query
const updatePost = function (req) {
    req.body.modified_date = Date.now();
    // use new:true to return the updated post rather than the original post when the query is executed
    return Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
};

// helper for testing
function loadData(file) {
	dataFile = file
	dishPosts = JSON.parse(fs.readFileSync(file, 'utf8'))
}

// helper function to generate unique id
function getNextId() {
	let ids = Object.keys(dishPosts).sort()
	let lastId = (ids.length > 0) ? ids[ids.length-1] : 0
	return parseInt(lastId) + 1
}

module.exports = {getAllPosts, getPostById, loadData, addPost, deletePost, updatePost}