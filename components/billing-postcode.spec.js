import BillingPostcode from './billing-postcode';
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
			pattern: 'whatever',
		};

		expect(BillingPostcode).toRenderAs(context, props);

	});

	it('render a disable input', () => {
		const props = {
			postcodeReference: 'ZipCode',
			pattern: 'whatever',
			isDisabled: true,
		};

		expect(BillingPostcode).toRenderAs(context, props);

	});

	it('render different styles', () => {
		const props = {
			postcodeReference: 'ZipCode',
			pattern: 'whatever',
			hasError: true,
			isHidden: true,
		};

		expect(BillingPostcode).toRenderAs(context, props);
	});
});
