import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export function City({
	disabled = false,
	hasError = false,
	id = 'city',
	label = 'City/Town',
	maxLength = 40,
	placeholder = 'e.g. Bath',
	required = true,
	value,
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<label
			id="cityField"
			className="o-forms-field ncf__validation-error"
			data-validate={required}
			htmlFor={id}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">{label}</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					id={id}
					name={id}
					data-trackable={`field-${id}`}
					autoComplete="address-level2"
					placeholder={placeholder}
					maxLength={maxLength}
					aria-required={required}
					required={required}
					disabled={disabled}
					defaultValue={value}
					type="text"
				/>
				<span className="o-forms-input__error">
					Please enter a valid city or town
				</span>
			</span>
		</label>
	);
}

City.propTypes = {
	disabled: PropTypes.bool,
	hasError: PropTypes.bool,
	id: PropTypes.string,
	label: PropTypes.string,
    maxlength: PropTypes.number,
    placeholder: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string,
};
