import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryInstructions ({
	fieldId = 'deliveryInstructionsField',
	hasError = false,
	inputId = 'deliveryInstructions',
	maxlength = null,
	rows = null,
	isDisabled = false,
	placeholder = '',
	value = ''
}) {
	const textAreaWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--textarea',
		{ 'o-forms-input--invalid': hasError }
	]);

	const maxLengthText = maxlength ? `(Max. ${maxlength} characters)` : '';
	const defaultPlaceholder = `Enter instructions ${maxLengthText}:\u000a- Door colour, letterbox location\u000a- Placement i.e. letterbox delivery\u000a- Special handling i.e. place in plastic bag`;

	const textAreaProps = {
		id: inputId,
		name: inputId,
		...(maxlength && { maxLength: maxlength }),
		...(rows && { rows }),
		'data-trackable': 'field-deliveryInstructions',
		placeholder: placeholder ? placeholder : defaultPlaceholder,
		disabled: isDisabled,
		defaultValue: value
	};

	return (
		<label
			id={fieldId}
			className="o-forms-field o-forms-field--optional"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Delivery instructions</span>
				<span className="o-forms-title__prompt">
					These may be printed on your newspaper. Don’t add sensitive information like access codes. If you do so, it is at your own risk. To provide additional secure information, login to your account via FT.com.
				</span>
			</span>

			<span className={textAreaWrapperClassNames}>
				<textarea {...textAreaProps} />
			</span>

			<p>Please note that we can only deliver to the ground floor level of your property.</p>
		</label>
	);
}

DeliveryInstructions.propTypes = {
	hasError: PropTypes.bool,
	maxlength: PropTypes.number,
	rows: PropTypes.number,
	isDisabled: PropTypes.bool,
	value: PropTypes.string
};
