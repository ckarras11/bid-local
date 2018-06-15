import React, { Component } from 'react';
import RegisterForm from './registerForm';

export default class RegisterPage extends Component {
constructor(props) {
  super(props);
  this.onSubmit = this.onSubmit.bind(this);
}


  onSubmit(values) {
    /* this.props.dispatch(login({
        username: this.state.username,
        password: this.state.password
    })) */
    console.log(values)
}
  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}
