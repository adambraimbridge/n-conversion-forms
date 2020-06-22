import React from "react";
import { mount } from 'enzyme'

import { Postcode } from './index';

describe('Postcode', () => {
	it('renders with default values on optional props', () => {
		const wrapper = mount(<Postcode />);

		expect(wrapper.find('input').prop('disabled')).toEqual(false);
		expect(wrapper.find('.o-forms-input__error').text()).toEqual('Please enter a valid postcode');
		expect(wrapper.find('span.o-forms-input').prop('className')).not.toContain('o-forms-input--invalid');
		expect(wrapper.find('input').prop('id')).toEqual('postcode');
		expect(wrapper.find('label.o-forms-field').prop('className')).not.toContain('ncf__hidden');
		expect(wrapper.find('.o-forms-title__main').text()).toEqual('Postcode');
		expect(wrapper.find('input').prop('placeholder')).toEqual('Enter your postcode');
		expect(wrapper.find('input').prop('pattern')).toEqual(null);
		expect(wrapper.find('input').prop('required')).toEqual(true);
	});
});
