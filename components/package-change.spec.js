import { PackageChange } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('PackageChange', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('package-change.html');
	});

	it('render with defaults', () => {
		const props = {
			changePackageUrl: 'https://www.ft.com',
			currentPackage: 'Trial'
		};

		expect(PackageChange).toRenderAs(context, props);
	});
});
