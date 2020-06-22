const FormElement = require('./form-element');

class Postcode extends FormElement {
	constructor (document) {
		super(document, '.ncf #postcodeField');
	}
}

module.exports = Postcode;
