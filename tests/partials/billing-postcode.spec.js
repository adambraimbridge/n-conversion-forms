const { expect } = require('chai');

const {
	fetchPartial,
	registerPartial,
	shouldBeDisableable,
	shouldBeHiddable,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('billing postcode template', () => {
	before(async () => {
		registerPartial('post-or-zip','');
		context.template = await fetchPartial('billing-postcode.html');
	});

	it('should be billing', () => {
		const $ = context.template({});
		expect($('label').text()).to.contain('Billing');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');

	shouldBeHiddable(context, '#billingPostCodeField');
});
