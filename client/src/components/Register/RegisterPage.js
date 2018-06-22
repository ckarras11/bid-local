import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { register } from '../../actions';
import { Redirect } from 'react-router-dom';

export class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {
		this.props.dispatch(register(values));
	}
	render() {
		if (this.props.newSignup !== '' && this.props.isAuthenticated === false) {
			return <Redirect to="/login" />;
		}
		return (
			<div>
				<RegisterForm onSubmit={this.onSubmit} msg={this.props.message} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		message: state.reducer.message,
		isAuthenticated: state.reducer.isAuthenticated,
		newSignup: state.reducer.newSignup
	};
};

export default connect(mapStateToProps)(RegisterPage);
