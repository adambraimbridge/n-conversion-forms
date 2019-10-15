import EmailWithConfirmation from './email-with-confirmation';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
expect.extend(expectToRenderAs);

describe('Email with confirmation', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('email.html');
	});

	it('render a email input and no confirmation', () => {
		const props = {
			showConfirm: false
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation', () => {
		const props = {
			showConfirm: true
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation with email error', () => {
		const props = {
			hasError: true,
			showConfirm: true,
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation with email confirmation error', () => {
		const props = {
			hasConfirmError: true,
			showConfirm: true,
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation with default value', () => {
		const props = {
			showConfirm: true,
			value: 'some@email.com'
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation for B2B', () => {
		const props = {
			isB2b: true,
			showConfirm: true,
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation with given description', () => {
		const props = {
			description: 'some description',
			isB2b: false,
			showConfirm: false,
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation with default description', () => {
		const props = {
			isB2b: false,
			showConfirm: false,
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation with read only fields', () => {
		const props = {
			isB2b: false,
			readonly: true,
			showConfirm: false,
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});

	it('render a email input and confirmation with disabled fields', () => {
		const props = {
			isB2b: false,
			showConfirm: false,
			isDisabled: true
		};

		expect(EmailWithConfirmation).toRenderAs(context, props);
	});
});
