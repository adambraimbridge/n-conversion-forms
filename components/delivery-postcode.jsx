import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const postcodeLabel = {
	USA: 'Zip Code',
	CAN: 'postal code'
}

export function DeliveryPostcode ({
	value = '',
	country = '',
	isDisabled = false,
	hasError = false,
	isHidden = false,
	pattern,
	additionalFieldInformation,
}) {

	const postcodeReference = postcodeLabel[country.toUpperCase()] || 'postcode';

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	const deliveryPostcodeFieldClassNames = classNames([
		'o-forms-field',
		{ 'ncf__hidden': isHidden }
	]);

	const fieldErrorClassNames = classNames([
		'o-forms-input__error',
		{ 'additional-field-information__with-field-error': additionalFieldInformation }
	]);

	return (
		<label
			id="deliveryPostcodeField"
			className={deliveryPostcodeFieldClassNames}
			data-validate="required"
			htmlFor="deliveryPostcode"
		>

			<span className="o-forms-title">
				<span className="o-forms-title__main">
					Delivery <span data-reference="postcode">{postcodeReference}</span>
				</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input type="text"
					id="deliveryPostcode"
					name="deliveryPostcode"
					defaultValue={`${value}`}
					placeholder={`Enter your ${postcodeReference}`}
					autoComplete="postal-code"
					data-trackable="delivery-postcode"
					aria-required="true"
					required
					pattern={pattern}
					disabled={isDisabled}
				/>
				<span className={fieldErrorClassNames}>
					Please enter a valid <span data-reference="postcode">{postcodeReference}</span>.
				</span>
				{additionalFieldInformation ? (
					<p className="additional-field-information">{additionalFieldInformation}</p>
				) : null}
			</span>
		</label>
	);
}

DeliveryPostcode.propTypes = {
	country: PropTypes.string,
	value: PropTypes.string,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool,
	additionalFieldInformation: PropTypes.node
};
