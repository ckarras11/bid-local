import React from 'react';
import { connect } from 'react-redux';
import SellForm from './SellForm';
import { postItem } from '../actions';

function mapStateToProps(state) {
	return {
		upload: state.reducer.upload
	};
}

export class ModalContent extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		this.props.dispatch(postItem(values));
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