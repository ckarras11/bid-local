import React, { Component } from 'react';
import Grid from '../grid';
import Modal from '../modal';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions';
import '../../styles/profile.css';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.dispatch(toggleModal());
	}

	componentWillMount() {
		console.log('getting posted items');
	}
	render() {
		let modal;
		if (this.props.showModal) {
			modal = <Modal />;
		}
		return (
			<div className="profile">
				{modal}
				<div className="profile_top">
					<h1>Hello Christopher</h1>
					<button onClick={this.handleClick} className="btn">
						Sell Something
					</button>
				</div>
				<h3>Here are your current Items:</h3>
				<Grid />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		showModal: state.reducer.showModal
	};
};

export default connect(mapStateToProps)(ProfilePage);
