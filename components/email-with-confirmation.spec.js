import EmailWithConfirmation from './email-with-confirmation';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';
import ReactDOMServer from 'react-dom/server';

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
});
