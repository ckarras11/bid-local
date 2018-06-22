import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions';
import '../styles/top-nav.css';

class TopNav extends Component {
	logout() {
		this.props.dispatch(logout);
	}

	render() {
		const userLinks = (
			<ul>
				<li>
					<Link to="/browse">Browse</Link>
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
					<Link to="/register">Sign Up</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		);

		return (
			<nav>
				<Link to="/">
					<img
						src="https://www.keycomputers.co.uk/home/logo-logo/"
						alt="logo"
					/>
				</Link>
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
