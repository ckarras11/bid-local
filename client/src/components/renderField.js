import React from 'react';

const renderField = ({
	input,
	extraClass,
	label,
	type,
	meta: { touched, error, warning }
}) => (
	<div className={`form-control ${extraClass}`}>
		<input
			{...input}
			className={touched && error ? 'err' : ''}
			placeholder={label}
			type={type}
		/>
	</div>
);

export default renderField;
