import FirstName from './first-name';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
expect.extend(expectToRenderAs);

describe('First name', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('firstname.html');
	});

	it('render a field with default settings', () => {
		const props = {};
		expect(FirstName).toRenderAs(context, props);
	});

	it('render a field with value', () => {
		const props = {
			value: 'some value'
		};
		expect(FirstName).toRenderAs(context, props);
	});

	it('render a disabled field', () => {
		const props = {
			isDisabled: true
		};
		expect(FirstName).toRenderAs(context, props);
	});

	it('render a field with error', () => {
		const props = {
			hasError: true
		};
		expect(FirstName).toRenderAs(context, props);
	});
});
