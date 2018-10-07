import React, { Component } from 'react';
import { connect } from 'react-redux';
import SellForm from './SellForm';
import { postItem } from '../actions';

function mapStateToProps(state) {
	return {
		upload: state.reducer.upload
	};
}

export class ModalContent extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		const fullItem = { upload: this.props.upload, ...values };
		this.props.dispatch(postItem(fullItem));
	}

	render() {
		return (
			<div className="modal-content">
				<h2 className="modal-title">What would you like to sell?</h2>
				<hr />
				<SellForm
					onSubmit={this.handleSubmit}
					imageUpload={this.props.upload}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ModalContent);
