import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions';
import '../styles/top-nav.css';

const mapStateToProps = state => {
    return {
        isAuthenticated: state.reducer.isAuthenticated
    }
}

class TopNav extends Component {
    logout(e)  {
        this.props.dispatch(logout);
    }

    render() {
        const userLinks = (
            <ul>
                <li><a href="/category">Categories</a></li>
                <li>Saved</li>
                <li>My Profile</li>
                <li><a href="" onClick={this.logout.bind(this)} >Logout</a></li>
            </ul>
        );

        const guestLinks = (
            <ul>
                <li><a href="/signup">Signup</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        );

        return (
            <nav>
                {this.props.isAuthenticated ? userLinks : guestLinks}
            </nav>
        )
    }
}

export default connect(mapStateToProps)(TopNav);