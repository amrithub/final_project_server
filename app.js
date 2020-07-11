const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require("connect-mongo")(session)
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const postRouter = require('./routes/posts_routes');
const authRouter = require('./routes/auth_routes');
//const userRouter = require('./routes/users_routes');


const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
// If we are not running in production, load our local .env
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const dbConn = process.env.MONGODB_URI || 'mongodb://localhost/online_dish_app'

// Set three properties to avoid deprecation warnings:
// useNewUrlParser: true
// useUnifiedTopology: true
// useFileAndModify: false
// useCreateIndex: true
mongoose.connect(dbConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log('Error connecting to database', err);
        } else {
            console.log('Connected to database',dbConn);
        }
    });

// Install middleware

// Use cors
const whitelist = ['http://localhost:3000','https://objective-williams-b6d9b3.netlify.com/']
app.use(cors({
    credentials: true,
    origin: function (origin,callback) {
        // Check each url in whitelist and see if it includes the origin (instead of matching exact string)
        const whitelistIndex = whitelist.findIndex((url) => url.includes(origin))
        console.log("found whitelistIndex", whitelistIndex)
        callback(null,whitelistIndex > -1)
    }
}));
app.use(session({
    // resave and saveUninitialized set to false for deprecation warnings
    secret: "Express is awesome",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1800000
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

app.get('/', (req, res) => {
    console.log('get on /');
    console.log('req.session', req.session)
    console.log('req.user', req.user)
    res.send('got your request');
})

app.use('/posts', postRouter);
app.use('/auth', authRouter);
//app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Blog express app listening on port ${port}`);
});

