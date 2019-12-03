import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryStartDate ({
	hasError = false,
	date = '',
	value = '',
	min = null,
	max = null,
	isDisabled = false
}) {
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	const inputProps = {
		type: 'date',
		id: 'deliveryStartDate',
		name: 'deliveryStartDate',
		...(min && { min }),
		...(max && { max }),
		'data-trackable': 'field-deliveryStartDate',
		'aria-required': 'true',
		required: true,
		disabled: isDisabled,
		defaultValue: value
	};

	return (
		<label
			id="deliveryStartDateField"
			className="o-forms-field"
			data-validate="required"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Delivery start date</span>
				<span className="o-forms-title__prompt">Earliest available delivery date: {date}</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input {...inputProps} />
			</span>

			<span className="o-forms-input__error">Please select a valid start date</span>

			<p>Your print subscription will start from: <strong className="js-start-date-text">{date}</strong></p>

			<p>NB. This will  be the closest date we can supply your newspaper based on your selected date e.g. if you select a Sunday then we can start your supply on the Monday.</p>
		</label>
	);
}

DeliveryStartDate.propTypes = {
	hasError: PropTypes.boolean,
	date: PropTypes.string,
	value: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	isDisabled: PropTypes.bool
};
