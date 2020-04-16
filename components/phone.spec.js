import { Phone } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('Phone', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('phone.html');
	});

	it('render a phone input with a label', () => {
		const props = {
			pattern: 'whatever',
		};

		expect(Phone).toRenderAs(context, props);
	});

	it('render a phone input with a label for B2B', () => {
		const props = {
			pattern: 'whatever',
			isB2b: true,
		};

		expect(Phone).toRenderAs(context, props);
	});

	it('render default label if B2B and educational licence', () => {
		const props = {
			pattern: 'whatever',
			isB2b: true,
			educationalLicence: true,
		};

		expect(Phone).toRenderAs(context, props);
	});

	it('render a disabled phone input', () => {
		const props = {
			pattern: 'whatever',
			isDisabled: true,
		};

		expect(Phone).toRenderAs(context, props);
	});

	it('render a phone input with error styling', () => {
		const props = {
			pattern: 'whatever',
			hasError: true,
		};

		expect(Phone).toRenderAs(context, props);
	});
});
