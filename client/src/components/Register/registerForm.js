import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import {
    required,
    maxLength15,
    minLength2,
    alphaNumeric,
    aol,
    number,
    minValue18,
    tooOld,
    phoneNumber,
    email
} from '../../utils/formValidation';

let RegisterForm = (props) => {
    const { handleSubmit} = props
    return (
        <form className={'form-horizontal'} onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
                validate={[required, maxLength15, minLength2]}
                warn={alphaNumeric}
            />
            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
                validate={email}
                warn={aol}
            />
            <Field
                name="age"
                type="number"
                component={renderField}
                label="Age"
                validate={[required, number, minValue18]}
                warn={tooOld}
            />
            <Field
                name="phone"
                type="number"
                component={renderField}
                label="Phone number"
                validate={[required, phoneNumber]}
            />
            <button className={'btn btn-success'} type='submit'>Submit</button>
        </form>
    )
  }

const mapStateToProps = state =>  {
    return {
        errorMsg: state.reducer.errorMsg,
        isAuthenticated: state.reducer.isAuthenticated
    };
}

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)

export default connect(mapStateToProps)(RegisterForm)
