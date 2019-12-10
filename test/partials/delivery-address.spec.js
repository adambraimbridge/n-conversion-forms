const expect = require('chai').expect;
const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeRequired,
} = require('../helpers');

let context = {};

describe('delivery-address template', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-address.html');
	});

	it('should have a blank value if one is not passed in', () => {
		const $ = context.template({});

		expect($('#deliveryAddressLine1').val()).to.equal('');
		expect($('#deliveryAddressLine2').val()).to.equal('');
		expect($('#deliveryAddressLine3').val()).to.equal('');
	});

	it('should populate the correct value', () => {
		const line1 = 'line1';
		const line2 = 'line2';
		const line3 = 'line3';
		const $ = context.template({
			line1, line2, line3
		});

		expect($('#deliveryAddressLine1').val()).to.equal(line1);
		expect($('#deliveryAddressLine2').val()).to.equal(line2);
		expect($('#deliveryAddressLine3').val()).to.equal(line3);
	});

	shouldBeRequired(context, '#deliveryAddressLine1');

	it('should not have error class by default', () => {
		const $ = context.template({});

		expect($('.o-forms-input--invalid').length).to.equal(0);
	});

	it('should have error class if hasError is passed', () => {
		const $ = context.template({ hasError: true });

		expect($('.o-forms-input--invalid').length).to.equal(3);
	});

	shouldBeDisableable(context, 'input');
});
