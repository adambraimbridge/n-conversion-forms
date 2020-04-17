import { LicenceConfirmation } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('LicenceConfirmation', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('licence-confirmation.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(LicenceConfirmation).toRenderAs(context, props);
	});

	it('renders if is trial', () => {
		const props = { isTrial: true };

		expect(LicenceConfirmation).toRenderAs(context, props);
	});

	it('renders if is embedded', () => {
		const props = { isEmbedded: true };

		expect(LicenceConfirmation).toRenderAs(context, props);
	});

	it('renders with custom duration value', () => {
		const props = { duration: 'one month' };

		expect(LicenceConfirmation).toRenderAs(context, props);
	});

	it('renders if educational licence', () => {
		const props = { isEducationalLicence: true };
		expect(LicenceConfirmation).toRenderAs(context, props);
	});

	it('renders if content id', () => {
		const props = { contentId: 'd19dc7a6-c33b-4931-9a7e-4a74674da29a' };
		expect(LicenceConfirmation).toRenderAs(context, props);
	});
});
