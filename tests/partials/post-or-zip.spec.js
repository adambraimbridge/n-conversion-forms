const { expect } = require('chai');

const {
	fetchPartial,
} = require('../helpers');

let context = {};

describe('post or zip template', () => {
	before(async () => {
		context.template = await fetchPartial('post-or-zip.html');
	});

	it('should be post code by default', () => {
		const $ = context.template({});
		expect($.text()).to.contain('Post code');
	});

	it('should render zip code if asked', () => {
		const $ = context.template({
			isZipCode: true
		});
		expect($.text()).to.contain('Zip code');
	});

});
