import React from 'react';
import '../../styles/form.css';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import { required, email } from '../../utils/formValidation';

let LoginForm = props => {
	const { handleSubmit, msg } = props;
	return (
		<form className={'form-horizontal'} onSubmit={handleSubmit}>
			<p>{msg}</p>
			<h2>Log In</h2>
			<Field
				name="email"
				type="email"
				component={renderField}
				label="Email"
				validate={[required, email]}
			/>
			<Field
				name="password"
				type="password"
				component={renderField}
				label="Password"
				validate={[required]}
			/>
			<button className={'btn'} type="submit">
				Submit
			</button>
		</form>
	);
};

LoginForm = reduxForm({
	form: 'login'
})(LoginForm);

export default LoginForm;
