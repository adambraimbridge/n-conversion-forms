import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

export default function BillingPostcode ({
	postcodeReference,
	value = '',
	pattern = null,
	isDisabled = false,
	hasError = false,
	isHidden = false }) {

	const BillingPostcodeFieldClassNames = classNames([
		'o-forms o-forms--wide ncf__field js-field',
		{
			'o-forms--error': hasError,
			'n-ui-hide': isHidden
		}
	]);

	return (<div
		id="billingPostcodeField"
		className={BillingPostcodeFieldClassNames}
		data-ui-item="form-field"
		data-ui-item-name="deliveryPostcode"
		data-validate="required"
	>

		<label htmlFor="billingPostcode" className="o-forms__label">
			Billing <span data-reference="postcode">{postcodeReference}</span>
		</label>

		<input type="text"
			id="billingPostcode"
			name="billingPostcode"
			defaultValue={`${value}`}
			placeholder={`Enter your ${postcodeReference}`}
			autoComplete="postal-code"
			className="o-forms__text js-field__input js-item__value"
			data-trackable="billing-postcode"
			aria-required="true"
			required
			pattern={pattern}
			disabled={isDisabled} />

		<div className="o-forms__errortext">
			Please enter a valid <span data-reference="postcode">{postcodeReference}</span>.
		</div>

	</div>
	);
}

BillingPostcode.propTypes = {
	postcodeReference: PropTypes.string.isRequired,
	value: PropTypes.string,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool
};
