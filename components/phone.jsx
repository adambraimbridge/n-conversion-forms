import React from 'react';
import propTypes from 'prop-types';

export default function Phone ({
	hasError = false,
	isB2b = false,
	isDisabled = false,
	value = '',
	pattern = '',
	fieldId = 'primaryTelephoneField',
	fieldName = 'primaryTelephone',
	inputId = 'primaryTelephone',
	inputName = 'primaryTelephone',
	dataTrackable = 'field-phone',
}) {
	const labelText = isB2b ? 'Work phone number' : 'Phone number';
	const descriptionId = 'phone-description';
	let className = 'o-forms o-forms--wide ncf__field js-field';

	if (hasError) {
		className += ' o-forms--error';
	}

	return (
		<div
			id={fieldId}
			className={className}
			data-ui-item="form-field"
			data-ui-item-name={fieldName}
			data-validate="required,number"
		>
			<label htmlFor={inputId} className="o-forms__label">{labelText}</label>
			<small className="o-forms__additional-info" id={descriptionId}>
				5 to 15 characters (numbers only)
			</small>

			<input
				type="tel"
				id={inputId}
				name={inputName}
				placeholder="Enter your phone number"
				autoComplete="tel"
				className="o-forms__text js-field__input js-item__value"
				data-min="5" /* Used by o-forms validation */
				data-max="15" /* Used by o-forms validation */
				minLength="5"
				maxLength="15"
				data-trackable={dataTrackable}
				aria-describedby={descriptionId}
				aria-required="true"
				required
				pattern={pattern}
				disabled={isDisabled}
				defaultValue={value}
			/>

			<div className="o-forms__errortext">This phone number is not valid</div>
		</div>
	);
};

Phone.propTypes = {
	hasError: propTypes.bool,
	isB2b: propTypes.bool,
	isDisabled: propTypes.bool,
	value: propTypes.string,
	pattern: propTypes.string,
	fieldId: propTypes.string,
	fieldName: propTypes.string,
	inputId: propTypes.string.isRequired,
	inputName: propTypes.string.isRequired,
	dataTrackable: propTypes.string.isRequired,
};
