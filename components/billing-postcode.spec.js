import { BillingPostcode } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {
};

expect.extend(expectToRenderAs);

describe('Billing Postcode', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('billing-postcode.html');
	});

	it('render a postcode input with a label', () => {
		const props = {
			postcodeReference: 'ZipCode',
		};

		expect(BillingPostcode).toRenderAs(context, props);

	});

	it('can render a disable input', () => {
		const props = {
			postcodeReference: 'ZipCode',
			isDisabled: true,
		};

		expect(BillingPostcode).toRenderAs(context, props);

	});

	it('can render a pattern attribute', () => {
		const props = {
			postcodeReference: 'ZipCode',
			pattern: 'Whatever'
		};

		expect(BillingPostcode).toRenderAs(context, props);

	});

	it('can render as an Error', () => {
		const props = {
			postcodeReference: 'ZipCode',
			hasError: true,
		};

		expect(BillingPostcode).toRenderAs(context, props);
	});

	it('can render as an hidden field', () => {
		const props = {
			postcodeReference: 'ZipCode',
			isHidden: true,
		};

		expect(BillingPostcode).toRenderAs(context, props);
	});
});
