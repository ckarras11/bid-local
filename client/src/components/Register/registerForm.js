import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import {
	required,
	maxLength15,
	minLength2,
	alphaNumeric,
	email
} from '../../utils/formValidation';

let RegisterForm = props => {
	const { handleSubmit, err } = props;
	return (
		<form className={'form-horizontal'} onSubmit={handleSubmit}>
			<p>{err}</p>
			<h2>Sign Up</h2>
			<p>Create an account. It's free and only takes a second!</p>
			<div className="fields">
				<div className="name">
					<Field
						name="first"
						type="text"
						component={renderField}
						label="First Name"
						validate={[required, maxLength15, minLength2]}
						warn={alphaNumeric}
					/>
					<Field
						name="last"
						type="text"
						component={renderField}
						label="Last Name"
						validate={[required, maxLength15, minLength2]}
						warn={alphaNumeric}
					/>
				</div>
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
				<Field
					name="password2"
					type="password2"
					component={renderField}
					label="Confirm Password"
					validate={[required]}
				/>
				<div className="terms-container">
					<Field
						name="terms"
						type="checkbox"
						component={renderField}
						label="I accept the Terms"
						validate={[required]}
					/>
					<p className="terms">
						I accept the <a href="">Terms of Use</a> &{' '}
						<a href="">Privacy Policy</a>
					</p>
				</div>

				<button className={'btn'} type="submit">
					Register Now
				</button>
			</div>
		</form>
	);
};

RegisterForm = reduxForm({
	form: 'register'
})(RegisterForm);

export default RegisterForm;
