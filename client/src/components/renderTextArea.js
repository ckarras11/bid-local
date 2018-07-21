import React from 'react';

const renderTextArea = ({
	input,
	extraClass,
	placeholder,
	meta: { touched, error, warning }
}) => (
	<div className={`form-control ${extraClass}`}>
		<textarea
			{...input}
			className={touched && error ? 'err' : ''}
			placeholder={placeholder}
		/>
	</div>
);

export default renderTextArea;
