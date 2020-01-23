import { EducationJobTitle } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
expect.extend(expectToRenderAs);

describe('Education job title', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('education-job-title.html');
	});

	it('renders an select element with default params', () => {
		expect(EducationJobTitle).toRenderAs(context, {});
	});

	it('renders a select element with a selected option', () => {
		const props = { value: 'Faculty' };
		expect(EducationJobTitle).toRenderAs(context, props);
	});

	it('renders a disabled select element', () => {
		const props = { isDisabled: true };
		expect(EducationJobTitle).toRenderAs(context, props);
	});

	it('renders an error message', () => {
		const props = { hasError: true };
		expect(EducationJobTitle).toRenderAs(context, props);
	});
});
