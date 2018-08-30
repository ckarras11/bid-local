const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	title: { type: String, required: true },
	price: { type: Number, required: true },
	location: { type: String, required: true },
	description: { type: String },
	duration: { type: Number, required: true },
	upload: {
		public_id: { type: String, required: true },
		secure_url: { type: String, required: true },
		path: { type: String, required: true },
		thumbnail_url: { type: String, required: true }
	}
});

const Item = mongoose.model('Item', itemSchema, 'Item');

module.exports = { Item };
