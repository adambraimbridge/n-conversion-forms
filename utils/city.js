const FormElement = require('./form-element');

class City extends FormElement {
	constructor (document) {
		super(document, '.ncf #cityField');
	}
}

module.exports = City;
