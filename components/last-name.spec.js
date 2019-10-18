import LastName from './last-name';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
expect.extend(expectToRenderAs);

describe('Last name', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('lastname.html');
	});

	it('render a field with default settings', () => {
		const props = {};
		expect(LastName).toRenderAs(context, props);
	});

	it('render a field with value', () => {
		const props = {
			value: 'some value'
		};
		expect(LastName).toRenderAs(context, props);
	});

	it('render a disabled field', () => {
		const props = {
			isDisabled: true
		};
		expect(LastName).toRenderAs(context, props);
	});

	it('render a field with error', () => {
		const props = {
			hasError: true
		};
		expect(LastName).toRenderAs(context, props);
	});
});
