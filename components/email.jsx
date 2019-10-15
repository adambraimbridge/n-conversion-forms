import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Email ({
	dataTrackable='field-email',
	describedBy = 'email-description',
	description = 'Please enter an email address',
	errorText='This email address is not valid',
	fieldId = 'emailField',
	hasError = false,
	inputId = 'email',
	isB2b = false,
	isDisabled = false,
	label = '',
	placeHolder = 'Enter your email address',
	readOnly = false,
	value = ''
}) {
	const labelText = label || (isB2b ? 'Work email address' : 'Email address');
	const fieldClassName = classNames([
		'o-forms o-forms--wide ncf__field js-field',
		{ 'o-forms--error': hasError }
	]);
	const inputClassName = classNames([
		'no-mouseflow o-forms__text js-field__input js-item__value',
		{ 'o-forms__field-disabled': readOnly }
	]);

	const conditionalInputs = {};
	if (describedBy) {
		conditionalInputs['aria-describedby'] = describedBy;
	}

	return (
		<div
			id={fieldId}
			className={fieldClassName}
			data-validate="required,email"
		>
			<label htmlFor={inputId} className="o-forms__label">{labelText}</label>
			{description &&
				<small id="email-description" className="o-forms__additional-info">{description}</small>
			}
			<input
				type="email"
				id={inputId}
				name={inputId}
				placeholder={placeHolder}
				autoComplete="email"
				className={inputClassName}
				data-trackable={dataTrackable}
				aria-required="true"
				required
				disabled={isDisabled}
				{...conditionalInputs}
				defaultValue={value}
			/>
			<div className="o-forms__errortext">{errorText}</div>
		</div>
	);
}

Email.propTypes = {
	dataTrackable: PropTypes.string,
	describedBy: PropTypes.string,
	description: PropTypes.string,
	errorText: PropTypes.string,
	fieldId: PropTypes.string,
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	isB2b: PropTypes.bool,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	placeHolder: PropTypes.string,
	readOnly: PropTypes.bool,
	value: PropTypes.string,
};

export default Email;
