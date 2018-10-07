const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	title: { type: String, required: true },
	price: { type: Number, required: true },
	location: { type: String, required: true },
	description: { type: String },
	duration: { type: Number, required: true },
	listingDate: { type: Date, required: true },
	upload: {
		public_id: { type: String },
		secure_url: { type: String },
		path: { type: String },
		thumbnail_url: { type: String }
	}
});

const Item = mongoose.model('Item', itemSchema, 'Item');

module.exports = { Item };
