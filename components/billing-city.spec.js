import { BillingCity } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('BillingCity', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('billing-city.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(BillingCity).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(BillingCity).toRenderAs(context, props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(BillingCity).toRenderAs(context, props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(BillingCity).toRenderAs(context, props);
	});
});
