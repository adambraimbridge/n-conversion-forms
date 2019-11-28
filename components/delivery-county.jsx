import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryCounty ({
	hasError = false,
	value = '',
	isDisabled = false

}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id="deliveryCountyField"
			className="o-forms-field"
			data-validate="required"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">County <small>(optional)</small></span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id="deliveryCounty"
					name="deliveryCounty"
					data-trackable="field-deliveryCounty"
					autoComplete="address-level3"
					placeholder="e.g. Somerset"
					disabled={isDisabled}
					defaultValue={value}
				/>
			</span>
		</label>
	);
}

DeliveryCounty.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool
};
