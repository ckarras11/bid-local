import React, { Component } from 'react';
import TopNav from './TopNav';
import Footer from './footer';
import '../styles/App.css';
import Grid from './grid';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import setAuthorizationToken from '../utils/setAuthToken';
import jwt from 'jsonwebtoken';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

setAuthorizationToken(sessionStorage.jwtToken);

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<TopNav />
					<Route exact path="/" component={Grid} />
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					{/* <Route path='/home' component={Profile} /> */}
					<Route path="/browse" component={Grid} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
