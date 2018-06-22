import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions';

export class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {
		this.props.dispatch(login(values));
	}

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/Browse" />;
		}

		return (
			<div>
				<LoginForm onSubmit={this.onSubmit} msg={this.props.message} />
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

export default connect(mapStateToProps)(LoginPage);
