const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const SELECTOR_BUTTON = 'button';
const SELECTOR_BACK_BUTTON = 'a.ncf__button';
const SELECTOR_FIELD_CENTER = '.ncf__field--center';

let context = {};

describe('submit template', () => {
	before(async () => {
		context.template = await fetchPartial('submit.html');
	});

	it('should say Continue by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_BUTTON).text().trim()).to.equal('Continue');
	});

	it('should display label if given', () => {
		const label = 'Testing';
		const $ = context.template({
			label
		});

		expect($(SELECTOR_BUTTON).text().trim()).to.equal(label);
	});

	it('should not be centered by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_FIELD_CENTER).length).to.equal(0);
	});

	it('should be centered if set', () => {
		const $ = context.template({
			isCentered: true
		});

		expect($(SELECTOR_FIELD_CENTER).length).to.equal(1);
	});

	it('should allow the buttons to be full width', () => {
		const $ = context.template({
			isFullWidth: true
		});

		expect($('.ncf__field--full-width-buttons').length).to.equal(1);
	});

	it('should not have the buttons be full width by default', () => {
		const $ = context.template();

		expect($('.ncf__field--full-width-buttons').length).to.equal(0);
	});

	it('should not show a back button by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_BACK_BUTTON).length).to.equal(0);
	});

	it('should show a back button if URL supplied', () => {
		const url = 'https://google.com';
		const $ = context.template({
			backButtonUrl: url
		});

		expect($(SELECTOR_BACK_BUTTON).attr('href')).to.equal(url);
		// Forms can be embedded within an iframe so ensure the back button will affect the parent frame
		expect($(SELECTOR_BACK_BUTTON).attr('target')).to.equal('_parent');
	});

	it('should show custom back button text if supplied', () => {
		const url = 'https://google.com';
		const $ = context.template({
			backButtonText: 'No thanks',
			backButtonUrl: url
		});

		expect($(SELECTOR_BACK_BUTTON).html()).to.equal('No thanks');
	});

	it('should have an id of submit by default', () => {
		const $ = context.template();
		expect($('#submitButton').length).to.equal(1);
	});

	it('should take an id given to it', () => {
		const $ = context.template({
			id: 'test'
		});
		expect($('#test').length).to.equal(1);
		expect($('#submitButton').length).to.equal(0);
	});
});
