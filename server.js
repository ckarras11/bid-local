const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { DATABASE_URL, PORT, JWT_ENCRYPTION_KEY } = require('./config');
const path = require('path');
const { User } = require('./models/user');

// Initializing app
const app = express();
mongoose.Promise = global.Promise;

// Morgan logging middleware
app.use(morgan('common'));

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

function checkToken(req, res, next) {
    const authorizationHeader = req.headers['authorization'];
    let token;

    if (authorizationHeader) {
        token = authorizationHeader.split(' ')[1];
    }

    if(!token) {
        console.log('No token provided');
        return res.status(403).send({auth: false, message: 'Missing Token'})
    }

    jwt.verify(token, JWT_ENCRYPTION_KEY, function(err, decoded) {
        if (err){
            console.log('Failed to authenticate');
            return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
        }
        else{
            console.log('Decoded token is: '+decoded);
            req.userid = decoded.id;
            next();
        }
    });
}

app.post('/api/auth', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    User
        .findOne({username: username})
        .then(user => {
            if(user) {
                //add bcrypt
                if(user.password == password) {
                    const token = jwt.sign({
                        id: user.id,
                        username: user.username
                    }, JWT_ENCRYPTION_KEY);
                    res.json({token})
                } else {
                   return res.status(401).json({ errors: 'Invalid Credentials' })
                }
            } else {
                return res.status(401).json({ errors: 'Invalid Credentials' })
            }
        })
})

app.get('/api/hello', checkToken, (req, res) => {
    res.status(200).send({ express: 'Hello From Express' });
  });
// Initializing Server
let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, (err) => {
    if (err) {
        return reject(err);
    }
    server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
    })
        .on('error', (err) => {
        mongoose.disconnect();
        reject(err);
        });
    });
});
}

function closeServer() {
return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close((err) => {
        if (err) {
        return reject(err);
        }
        resolve();
    });
    });
});
}

if (require.main === module) {
runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };