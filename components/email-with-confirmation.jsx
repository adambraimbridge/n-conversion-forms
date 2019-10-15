import React from 'react';
import PropTypes from 'prop-types';
import Email from './email';

function EmailWithConfirmation ({
	description = 'Please enter an email address',
	hasConfirmError = false,
	hasError = false,
	isB2b = false,
	isDisabled = false,
	readonly = false,
	showConfirm = false,
	value = ''
}) {

	return (
		<React.Fragment>
			<Email
				description={description}
				hasError={hasError}
				isB2b={isB2b}
				isDisabled={isDisabled}
				readOnly={readonly}
				value={value}
			/>
			{showConfirm &&
			<Email
				dataTrackable="field-emailConfirm"
				describedBy=""
				description=""
				errorText="This email address does not match"
				fieldId="emailConfirmField"
				hasError={hasConfirmError}
				inputId="emailConfirm"
				isDisabled={isDisabled}
				label="Confirm email address"
				placeHolder="Confirm your email address"
				readOnly={readonly}
				value=""
			/>
			}
		</React.Fragment>
	);
}

EmailWithConfirmation.propTypes = {
	description: PropTypes.string,
	hasConfirmError: PropTypes.bool,
	hasError: PropTypes.bool,
	isB2b: PropTypes.bool,
	isDisabled: PropTypes.bool,
	readonly: PropTypes.bool,
	showConfirm: PropTypes.bool,
	value: PropTypes.string,
};

export default EmailWithConfirmation;
