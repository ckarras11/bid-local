import React, { Component } from 'react';
import TopNav from './TopNav';
import HomePage from './HomePage';
import Footer from './footer';
import '../styles/App.css';
import Grid from './grid';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import ProfilePage from './Profile/ProfilePage';
import Faq from './Faq';
import Terms from './Terms';
import Privacy from './Privacy';
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
					<Route exact path="/" component={HomePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/faq" component={Faq} />
					<Route path="/terms" component={Terms} />
					<Route path="/privacy" component={Privacy} />
					<Route path="/profile" component={requireAuth(ProfilePage)} />
					<Route path="/browse" component={requireAuth(Grid)} />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
