import { LicenceConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('LicenceConfirmation', () => {
	it('renders with default props', () => {
		const props = {};

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders if is trial', () => {
		const props = { isTrial: true };

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders if is embedded', () => {
		const props = { isEmbedded: true };

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders with custom duration value', () => {
		const props = { duration: 'one month' };

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});
});
