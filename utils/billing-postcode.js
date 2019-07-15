const FormElement = require('./form-element');

class BillingPostCode extends FormElement {
	constructor (document) {
		super(document, '.ncf #billingPostCodeField');
	}
}

module.exports = BillingPostCode;
