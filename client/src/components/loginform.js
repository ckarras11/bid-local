import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../styles/loginform.css';
import { login } from '../actions';

const mapStateToProps = state =>  {
    return {
        errorMsg: state.reducer.errorMsg
    };
}

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(login({
            username: this.state.username,
            password: this.state.password
        }))
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    


    render() {
        const {username, password, isLoading} = this.state
        return (
            <form className={'form-horizontal'} onSubmit={this.onSubmit}>
                <p>{this.props.errorMsg}</p>
                <legend>Log In</legend>
                <div className={'form-group'}>
                    <label className={'control-label'} htmlFor='username'>Username:</label>
                    <input className='form-control' onChange={this.onChange} value={username} name='username' type='text' />
                </div>
                <div className={'form-group'}>
                    <label className={'control-label'} htmlFor='password'>Password:</label>
                    <input className='form-control' onChange={this.onChange} value={password} name='password' type='password' />
                </div>
                <button className={'btn btn-success'} type='submit' disabled={isLoading} >Submit</button>

            </form>
        );
    }
};

export default connect(mapStateToProps)(LoginForm)