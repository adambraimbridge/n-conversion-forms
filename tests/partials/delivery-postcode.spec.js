const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeHiddable,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('delivery postcode template', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-postcode.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');

	shouldBeHiddable(context, '#deliveryPostCodeField');
});
