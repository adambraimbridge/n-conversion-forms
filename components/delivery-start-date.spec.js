import { DeliveryStartDate } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryStartDate', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeliveryStartDate).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryStartDate).toRenderCorrectly(props);
	});

	it('renders with a custom date', () => {
		const props = { date: '5th November 2019' };

		expect(DeliveryStartDate).toRenderCorrectly(props);
	});

	it('renders with a custom input value', () => {
		const props = { value: 'Foobar' };

		expect(DeliveryStartDate).toRenderCorrectly(props);
	});

	it('renders with a custom input min value', () => {
		const props = { min: '1' };

		expect(DeliveryStartDate).toRenderCorrectly(props);
	});

	it('renders with a custom input max value', () => {
		const props = { date: '2' };

		expect(DeliveryStartDate).toRenderCorrectly(props);
	});

	it('renders with a disabled input', () => {
		const props = { isDisabled: true };

		expect(DeliveryStartDate).toRenderCorrectly(props);
	});
});
