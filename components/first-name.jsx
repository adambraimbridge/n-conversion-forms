import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function FirstName ({
	dataTrackable='field-name',
	errorText = 'Please enter your first name',
	fieldId = 'firstNameField',
	hasError = false,
	inputId = 'firstName',
	inputName,
	isDisabled = false,
	label = 'First name',
	placeHolder = 'Enter your first name',
	value = ''
}) {
	// Use inputId if inputName is not explicitly passed.
	inputName = inputName || inputId;

	const fieldClassNames = classNames([
		'o-forms o-forms--wide ncf__field js-field',
		{ 'o-forms--error': hasError }
	]);
	const inputClassNames = classNames([
		'o-forms__text js-field__input js-item__value'
	]);

	return (
		<div
			id={fieldId}
			className={fieldClassNames}
			data-ui-item="form-field"
			data-ui-item-name={inputId}
			data-validate="required"
		>
			<label htmlFor={inputId} className="o-forms__label">{label}</label>
			<input
				type="text"
				id={inputId}
				name={inputName}
				placeholder={placeHolder}
				autoComplete="given-name"
				className={inputClassNames}
				data-trackable={dataTrackable}
				aria-required="true" required
				disabled={isDisabled}
				defaultValue={value}
			/>

			<div className="o-forms__errortext">{errorText}</div>
		</div>
	);
}

FirstName.propTypes = {
	dataTrackable: PropTypes.string,
	errorText: PropTypes.string,
	fieldId: PropTypes.string,
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	placeHolder: PropTypes.string,
	value: PropTypes.string,
};
