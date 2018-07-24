import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import renderTextArea from './renderTextArea';
import { required } from '../utils/formValidation';
import { setUpload } from '../actions';

class SellForm extends Component {
	constructor(props) {
		super(props);
		this.handlePreview = this.handlePreview.bind(this);
	}
	upload() {
		window.cloudinary.openUploadWidget(
			{
				cloud_name: 'ckarras',
				upload_preset: 'cidbexyv',
				sources: ['local', 'camera']
			},
			this.processCloudinaryResult
		);
	}

	processCloudinaryResult = (error, results) => {
		if (results) {
			const result = results[0];
			const { secure_url, public_id, path, thumbnail_url } = result;
			this.handlePreview({ secure_url, public_id, path, thumbnail_url });
		}
	};

	handlePreview(upload) {
		this.props.dispatch(setUpload(upload));
	}

	render() {
		let preview;
		this.props.imageUpload.secure_url
			? (preview = <img src={this.props.imageUpload.secure_url} alt="item" />)
			: (preview = '');
		return (
			<form onSubmit={this.props.handleSubmit} method="post">
				<div className="sellform">
					<div className="thumbnail_preview">{preview}</div>
					<h4 className="upload_title">Click to upload Image</h4>
					<button className="upload_button" onClick={this.upload.bind(this)}>
						Upload
					</button>
					<label htmlFor="title">Title</label>
					<Field
						name="title"
						type="text"
						component={renderField}
						label="Xbox One"
						validate={[required]}
						extraClass="title"
					/>
					<label htmlFor="location">Location</label>
					<Field
						name="location"
						type="text"
						component={renderField}
						label="Harwich, MA"
						validate={[required]}
						extraClass="location"
					/>
					<label htmlFor="price">Starting Price</label>
					<Field
						name="price"
						type="text"
						component={renderField}
						label="50"
						validate={[required]}
						extraClass="input_price"
					/>
					<label htmlFor="length">Auction Length (Days)</label>
					<Field name="length" component="select" className="length">
						<option />
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</Field>
					<Field
						name="description"
						component={renderTextArea}
						label="Description (Optional)"
						validate={[required]}
						extraClass="description"
						placeholder="Description"
					/>
					<button className={'btn'} type="submit">
						Post
					</button>
				</div>
			</form>
		);
	}
}

SellForm = reduxForm({
	form: 'register'
})(SellForm);

export default SellForm;
