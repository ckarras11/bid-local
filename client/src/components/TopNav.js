import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import '../styles/top-nav.css';

class TopNav extends Component {
	logout(e) {
		this.props.dispatch(logout);
	}

	render() {
		const userLinks = (
			<ul>
				<li>
					<a href="/browse">Browse</a>
				</li>
				<li>Saved</li>
				<li>My Profile</li>
				<li>
					<a href="" onClick={this.logout.bind(this)}>
						Logout
					</a>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul>
				<li>
					<a href="/register">Sign Up</a>
				</li>
				<li>
					<a href="/login">Login</a>
				</li>
			</ul>
		);

		return (
			<nav>
				<a href="/">
					<img
						src="https://www.keycomputers.co.uk/home/logo-logo/"
						alt="logo"
					/>
				</a>
				{this.props.isAuthenticated ? userLinks : guestLinks}
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.reducer.isAuthenticated
	};
};

export default connect(mapStateToProps)(TopNav);
