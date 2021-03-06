const expect = require('chai').expect;
const {
	fetchPartial,
	shouldBeDisableable,
	shouldError
} = require('../helpers');

let context = {};

describe('delivery-instructions template', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-instructions.html');
	});

	it('should set a maxlength if set', () => {
		const $ = context.template({
			maxlength: '200'
		});

		expect($('textarea').attr('maxlength')).to.equal('200');
	});

	it('should have a blank value if one isnt passed in', () => {
		const $ = context.template({});

		expect($('textarea').text().trim()).to.equal('');
	});

	it('should have security note if hasSignupSecurityNote = true', () => {
		const $ = context.template({
			hasSignupSecurityNote: true
		});

		expect($.text()).to.contain('Security Notes section');
	});

	it('should not have security note if hasSignupSecurityNote = false', () => {
		const $ = context.template({
			hasSignupSecurityNote: false
		});

		expect($.text()).not.to.contain('Security Notes section');
	});

	it('should populate the correct value', () => {
		const value = 'ThisIsAValue';
		const $ = context.template({
			value
		});

		expect($('textarea').text().trim()).to.equal(value);
	});

	shouldError(context);

	shouldBeDisableable(context, 'textarea');
});
