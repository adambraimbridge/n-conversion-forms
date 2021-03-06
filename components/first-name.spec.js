import { mount } from 'enzyme';
import { FirstName } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
expect.extend(expectToRenderAs);

describe('First name', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('firstname.html');
	});

	it('render a field with default settings', () => {
		const props = {};
		expect(FirstName).toRenderAs(context, props);
	});

	it('render a field with value', () => {
		const props = {
			value: 'some value'
		};
		expect(FirstName).toRenderAs(context, props);
	});

	it('render a disabled field', () => {
		const props = {
			isDisabled: true
		};
		expect(FirstName).toRenderAs(context, props);
	});

	it('render a field with error', () => {
		const props = {
			hasError: true
		};
		expect(FirstName).toRenderAs(context, props);
	});

	it('render a field with custom error', () => {
		const props = {
			errorText: 'some error happened',
			fieldId: 'fieldId',
			hasError: true,
		};
		const component = mount(FirstName(props));
		const element = component.find('#fieldId .o-forms-input__error').first();
		expect(element.text()).toBe(props.errorText);
	});

	it('render a field with custom data-trackable', () => {
		const props = {
			dataTrackable: 'test-data-trackable',
			inputId: 'inputId',

		};
		const component = mount(FirstName(props));
		const actualValue = component.find('#inputId').prop('data-trackable');
		expect(actualValue).toBe(props.dataTrackable);
	});

	it('render a field with custom id', () => {
		const props = {
			fieldId: 'fieldId'
		};
		const component = mount(FirstName(props));
		const element = component.find('#fieldId');
		expect(element.exists()).toBe(true);
	});

	it('render a field with custom input id', () => {
		const props = {
			inputId: 'inputId'
		};
		const component = mount(FirstName(props));
		const element = component.find('input#inputId');
		expect(element.exists()).toBe(true);
	});

	it('render a field with custom label', () => {
		const props = {
			fieldId: 'fieldId',
			label: 'test label'
		};
		const component = mount(FirstName(props));
		const element = component.find('#fieldId').children('.o-forms-title').first();
		expect(element.text()).toBe(props.label);
	});

	it('render a field with custom placeholder text', () => {
		const props = {
			inputId: 'inputId',
			placeHolder: 'test placeholder'
		};
		const component = mount(FirstName(props));
		const actualValue = component.find('#inputId').prop('placeholder');
		expect(actualValue).toBe(props.placeHolder);
	});
});
