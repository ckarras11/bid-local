const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { DATABASE_URL, PORT, JWT_ENCRYPTION_KEY } = require('./config');
const path = require('path');
const moment = require('moment');
const { User } = require('./models/user');
const { Item } = require('./models/item');

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

	if (!token) {
		console.log('No token provided');
		return res.status(403).json({ auth: false, errors: 'No Token Provided' });
	}
	console.log(token);
	jwt.verify(token, JWT_ENCRYPTION_KEY, function(err, decoded) {
		if (err) {
			console.log(err);
			console.log('Failed to authenticate');
			return res
				.status(401)
				.json({ auth: false, errors: 'Failed to authenticate.' });
		} else {
			console.log('Decoded token is: ' + decoded);
			req.userid = decoded.id;
			next();
		}
	});
}

app.post('/api/register', (req, res) => {
	const { first, last, email, password, password2, terms } = req.body;

	//add validation

	if (password === password2) {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = {
			firstName: first,
			lastName: last,
			email,
			password: hash,
			terms
		};

		User.find({ email }).then(user => {
			if (user.length !== 0) {
				res.status(409).json({ errors: 'User already exists' });
			} else {
				User.create(newUser).then(_user => {
					res
						.status(201)
						.json({ success: 'User Created', newUser: _user.email });
				});
			}
		});
	} else {
		res.status(409).json({ errors: 'passwords do not match' });
	}
});

app.post('/api/auth', (req, res) => {
	const { email, password } = req.body;
	console.log(email, password, req.body);
	User.findOne({ email: email }).then(user => {
		if (user) {
			console.log(user);
			if (bcrypt.compareSync(password, user.password)) {
				const token = jwt.sign(
					{
						id: user.id,
						email: user.email,
						exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
					},
					JWT_ENCRYPTION_KEY
				);
				res.json({ token });
			} else {
				return res.status(401).json({ errors: 'Invalid Credentials' });
			}
		} else {
			return res.status(401).json({ errors: 'Invalid Credentials' });
		}
	});
});

app.post('/api/upload', (req, res) => {
	const { upload, title, location, price, length, description } = req.body;
	const newItem = {
		title,
		price,
		location,
		description,
		duration: length,
		upload,
		listingDate: moment().format()
	};
	Item.create(newItem).then(_item => {
		res.status(201).json({ success: 'Item Listed', newItem: _item });
	});
});

app.get('/api/for_sale', checkToken, (req, res) => {
	Item.find().then(items => res.status(200).send(items));
});

// Initializing Server
let server;

function runServer(databaseUrl = DATABASE_URL, port = PORT) {
	return new Promise((resolve, reject) => {
		mongoose.connect(
			databaseUrl,
			err => {
				if (err) {
					return reject(err);
				}
				server = app
					.listen(port, () => {
						console.log(`Your app is listening on port ${port}`);
						resolve();
					})
					.on('error', err => {
						mongoose.disconnect();
						reject(err);
					});
			}
		);
	});
}

function closeServer() {
	return mongoose.disconnect().then(() => {
		return new Promise((resolve, reject) => {
			console.log('Closing server');
			server.close(err => {
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
