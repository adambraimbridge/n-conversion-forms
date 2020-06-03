const {
	fetchPartial
} = require('../helpers');
const expect = require('chai').expect;

let context = {};
const CONTENT_SELECTOR = '.ncf__package-change__content';

describe('package-change template', () => {
	before(async () => {
		context.template = await fetchPartial('package-change.html');
	});

	it('should set the link correctly', () => {
		const data = { changePackageUrl: '/foo' };
		const $ = context.template(data);

		expect($('a').attr('href')).to.equal('/foo');
	});

	it('should display package name and price when passed', () => {
		const data = { currentPackage: 'Digital' };
		const $ = context.template(data);

		expect($(CONTENT_SELECTOR).text()).to.contain(data.currentPackage);
	});
});
