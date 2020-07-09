

// getAllPosts

const {getAllPosts, getPostById, addPost, deletePost, updatePost} = require("../utils/posts_utilities")

// getPostById
const getPosts = function (req, res) {
    // execute the query from getAllPosts
    getAllPosts(req).
    sort({
        modified_date: -1
    }).
    exec((err, posts) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.send(posts);
    });
};
function getPost(req,res) {
	let post = getPostById(req)
	if(post) return res.send(post)
	// if we didn't get the post, assume it wasn't found
	res.status(400)
	res.send(req.error)
}

// makePost
function makePost(req,res) {
	const newPost = addPost(req)
	if(newPost) {
		res.status(201)
		res.send(newPost)
	}
	// If there is no newPost, there was a problem
	else {
		res.status(500)
		res.send(req.error)
	}
}

// removePost
function removePost(req, res) {
	let posts = deletePost(req)
	if(req.error) {
		res.status(req.status)
		res.send(req.error)
	}
	else {
		res.send(posts)
	}

}

function changePost(req, res) {
	let updatedPost = updatePost(req)
	if(req.error) {
		res.status(req.status)
		res.send(req.error)
	}
	else {
		res.send(updatedPost)
	}
}

module.exports = {getPosts, getPost, makePost, removePost, changePost}