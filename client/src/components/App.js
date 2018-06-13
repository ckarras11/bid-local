import React, { Component } from 'react';
import TopNav from './TopNav';
import Footer from './footer';
import '../styles/App.css';
import Grid from './grid';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import setAuthorizationToken from '../utils/setAuthToken';
import requireAuth from '../utils/requireAuth'
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
					<Route path="/signup" component={RegisterPage} />
					{/* <Route path='/home' component={Profile} /> */}
					<Route path="/browse" component={requireAuth(Grid)} />
					<Footer />
				</div>
			</Router>
		);
	}
}



export default App;
