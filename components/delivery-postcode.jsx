import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryPostcode ({
	postcodeReference,
	value = '',
	pattern = '',
	isDisabled = false,
	hasError = false,
	isHidden = false
}) {
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	let deliveryPostcodeFieldClassNames = classNames([
		'o-forms-field',
		{ 'ncf__hidden': isHidden }
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
				<span className="o-forms-input__error">
					Please enter a valid <span data-reference="postcode">{postcodeReference}</span>.
				</span>
			</span>
		</label>
	);
}

DeliveryPostcode.propTypes = {
	postcodeReference: PropTypes.string.isRequired,
	value: PropTypes.string,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool
};
