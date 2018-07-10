import React, { Component } from 'react';
import TopNav from './TopNav';
import Footer from './footer';
import '../styles/App.css';
import Grid from './grid';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import ProfilePage from './Profile/ProfilePage';
import setAuthorizationToken from '../utils/setAuthToken';
import requireAuth from '../utils/requireAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom';

setAuthorizationToken(sessionStorage.jwtToken);

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<TopNav />
					<Route exact path="/" />
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/profile" component={ProfilePage} />
					<Route path="/browse" component={requireAuth(Grid)} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
