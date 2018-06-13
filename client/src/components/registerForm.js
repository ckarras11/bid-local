import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {} from '../actions';

export class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            username: '',
            password: '',
            password2: '',
            email: '',
            errors: {},
            isLoading: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        /* this.props.dispatch(login({
            username: this.state.username,
            password: this.state.password
        })) */
        console.log(this.state)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
  render() {
      const {username, password, password2, firstName, lastName, email} = this.state
    return (
        <form className={'form-horizontal'} onSubmit={this.onSubmit}>
            <p>{this.props.errorMsg}</p>
            <legend>Register</legend>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='firstName'>First Name:</label>
                <input className={'form-control'} onChange={this.onChange} value={firstName} name='firstName' type='text' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='lastName'>Last Name:</label>
                <input className={'form-control'} onChange={this.onChange} value={lastName} name='lastName' type='text' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='email'>Email:</label>
                <input className={'form-control'} onChange={this.onChange} value={email} name='email' type='email' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='username'>Username:</label>
                <input className={'form-control'} onChange={this.onChange} value={username} name='username' type='text' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='password'>Password:</label>
                <input className={'form-control'} onChange={this.onChange} value={password} name='password' type='password' />
            </div>
            <div className={'form-group'}>
                <label className={'control-label'} htmlFor='password2'>Confirm Password:</label>
                <input className={'form-control'} onChange={this.onChange} value={password2} name='password2' type='password' />
            </div>
            <button className={'btn btn-success'} type='submit'>Submit</button>
        </form>
    )
  }
}

const mapStateToProps = state =>  {
    return {
        errorMsg: state.reducer.errorMsg,
        isAuthenticated: state.reducer.isAuthenticated
    };
}

export default connect(mapStateToProps)(RegisterForm)