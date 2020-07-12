const mongoose = require('mongoose');
const expect = require('expect');
const utilities = require('../utils/posts_utils');
const Post = require('../models/post');
// set up connection for test database
const dbConn = "mongodb://localhost/online_dish_app"

// Use done to deal with asynchronous code - done is called when the hooks completes
before(done => connectToDb(done))

// Connect to the test database
function connectToDb(done) {
	// Connect to the database (same as we do in app.js)
	mongoose.connect(
		dbConn,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		},
		err => {
			if (err) {
				console.log("Error connecting to database", err)
				done()
			} else {
				console.log("Connected to database!")
				done()
			}
		}
	)
}
after(done => {
	mongoose.disconnect(() => done())
})
beforeEach(async function() {
	// Load a test record in setupData
	// Use await so we can access the postId, which is used by some tests
	let post = await setupData()
	postId = post._id
})

function setupData() {
	let date = Date.now()
	let testPost = {}
	testPost.title = "Test post 1"
	testPost.username = "tester"
	testPost.create_date = date
	testPost.modified_date = date
	testPost.content = "This is the first test post"
	testPost.category = ""
	return Post.create(testPost)
}
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
});

function tearDownData() {
	return Post.deleteMany()
}
describe('getAllPosts with one post', () => {
    it('should get a post if one exists', async function () {
        let req = {
            query: {}
        };
        await utilities.getAllPosts(req).exec((err, posts) => {
            expect(Object.keys(posts).length).toBe(1);
        });
    });
    it('username of first post should be tester', async function () {
        let req = {
            query: {}
        };
        await utilities.getAllPosts(req).exec((err, posts) => {
            expect(posts[0].username).toBe('tester');
        });

    });
});
describe.only('getPostById', () => {
    it('username of first post should be tester', async function () {
        // Set up req with postId
        let req = {
            params: {
                id: postId
            }
        }
        await utilities.getPostById(req).exec((err, post) => {
            expect(post.username).toBe('tester');
        });
    });
});
describe.only('addPost', () => {
    it('should add a post', async function () {
        // define a req object with expected structure
        const req = {
            body: {
                title: "Another post",
                username: "tester",
                content: "This is another blog post!",
                category: ""
            }
        }
        await utilities.addPost(req).save((err, post) => {
            expect(post.title).toBe(req.body.title);
        });
    });
});
describe.only('deletePost', () => {
    it('should delete the specified post', async function () {
        await utilities.deletePost(postId).exec();
        await Post.findById(postId).exec((err, post) => {
            expect(post).toBe(null);
        });
    });
});
describe.only('updatePost', () => {
    it('should update a post', async function () {
        // set up a req object
        const req = {
            params: {
                id: postId
            },
            body: {
                title: "Updated post",
                username: "tester",
                content: "This is an updated blog post!",
                category: ""
            }
        };
        await utilities.updatePost(req).exec((err, post) => {
            expect(post.title).toBe(req.body.title);
        });
    });
});