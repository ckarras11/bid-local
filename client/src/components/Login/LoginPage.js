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
				<LoginForm onSubmit={this.onSubmit} err={this.props.errorMsg} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		errorMsg: state.reducer.errorMsg,
		isAuthenticated: state.reducer.isAuthenticated
	};
};

export default connect(mapStateToProps)(LoginPage);
