import { DeliveryOption } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DeliveryOption', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-option.html');
	});

	it('renders with minimum mandatory props', () => {
		const props = {
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true
				}
			]
		};

		expect(DeliveryOption).toRenderAs(context, props);
	});

	it('renders with a context of being single', () => {
		const props = {
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true
				}
			],
			isSingle: true
		};

		expect(DeliveryOption).toRenderAs(context, props);
	});

	it('renders without unrecognised delivery options', () => {
		const props = {
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true
				},
				{
					value: 'FOOBAR',
					isSelected: false,
					isValidDeliveryOption: false
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true
				}
			]
		};

		expect(DeliveryOption).toRenderAs(context, props);
	});
});
