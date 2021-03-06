const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	terms: { type: Boolean, required: true },
	saved: Array
});

const User = mongoose.model('User', userSchema, 'User');

module.exports = { User };
