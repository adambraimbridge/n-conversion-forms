import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryOption ({
	options = [],
	isSingle = false
}) {
	const divClassName = classNames([
		'o-forms-field',
		'ncf__delivery-option',
		{ 'ncf__delivery-option--single': isSingle }
	]);

	const deliveryOptions = {
		PV: {
			title: 'Paper vouchers',
			description: '13-week voucher pack delivered quarterly and redeemable at retailers nationwide.'
		},
		HD: {
			title: 'Home delivery',
			description: 'Free delivery to your home or office before 7am.'
		},
		EV: {
			title: 'Electronic vouchers',
			description: 'Delivered via email and card, redeemable at retailers nationwide.'
		}
	};

	return (
		<div
			id="deliveryOptionField"
			className={divClassName}
			role="group"
			aria-label="Delivery options"
		>
			<span className="o-forms-input o-forms-input--radio-round">
				{
					options.map(({value, isSelected}, index) => {
						const inputProps = {
							type: 'radio',
							id: value,
							name: 'deliveryOption',
							value: value,
							className: 'ncf__delivery-option__input',
							...(isSelected && { defaultChecked: true })
						};

						const deliveryOptionValue = deliveryOptions[value];

						return (
							<label key={index} className="ncf__delivery-option__item">
								<input {...inputProps} />
								<span className="o-forms-input__label ncf__delivery-option__label">
									{
										deliveryOptionValue && (
											<React.Fragment>
												<span className="ncf__delivery-option__title">{deliveryOptionValue.title}</span>
												<div className="ncf__delivery-option__description">{deliveryOptionValue.description}</div>
											</React.Fragment>
										)
									}
								</span>
							</label>
						);
					})
				}
			</span>
		</div>
	);
}

DeliveryOption.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		isSelected: PropTypes.boolean
	})),
	isSingle: PropTypes.boolean
};
