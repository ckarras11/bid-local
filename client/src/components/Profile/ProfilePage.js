import React, { Component } from 'react';
import Grid from '../grid';
import '../../styles/profile.css';

class ProfilePage extends Component {
	componentWillMount() {
		console.log('getting posted items');
	}
	render() {
		return (
			<div className="profile">
				<div className="profile_top">
					<h1>Hello Christopher</h1>
					<button className="btn">Sell Something</button>
				</div>
				<h3>Here are your current Items:</h3>
				<Grid />
			</div>
		);
	}
}

export default ProfilePage;
