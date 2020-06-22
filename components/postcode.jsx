import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Postcode({
	disabled = false,
	error = 'Please enter a valid postcode',
	hasError = false,
	id = 'postcode',
	isHidden = false,
	label = 'Postcode',
	pattern = null,
	placeholder = 'Enter your postcode',
	required = true,
	value,
}) {
	const labelClassNames = classNames([
		'o-forms-field',
		{ 'ncf__hidden': isHidden }
	]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id="postcodeField"
			className={labelClassNames}
			data-validate={required}
			htmlFor={id}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					{label}
				</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input 
					id={id}
					name={id}
					defaultValue={value}
					placeholder={placeholder}
					autoComplete="postal-code"
					data-trackable={`field-${id}`}
					disabled={disabled}
					aria-required={required}
					required={required}
					pattern={pattern}
					type="text"
				/>
				<span className="o-forms-input__error">
					{error}
				</span>
			</span>
		</label>
	);
}

Postcode.propTypes = {
	disabled: PropTypes.bool,
	error: PropTypes.string,
	hasError: PropTypes.bool,
	id: PropTypes.string,
	isHidden: PropTypes.bool,
	label: PropTypes.string,
	pattern: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
};
