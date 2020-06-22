import React from "react";
import { mount } from 'enzyme'

import { City } from './index';

describe('City', () => {
	it('renders with default values on optional props', () => {
		const wrapper = mount(<City />);

		expect(wrapper.find('input').prop('disabled')).toEqual(false);
		expect(wrapper.find('span.o-forms-input').prop('className')).not.toContain('o-forms-input--invalid');
		expect(wrapper.find('input').prop('id')).toEqual('city');
		expect(wrapper.find('.o-forms-title__main').text()).toEqual('City/Town');
		expect(wrapper.find('input').prop('maxLength')).toEqual(40);
		expect(wrapper.find('input').prop('placeholder')).toEqual('e.g. Bath');
		expect(wrapper.find('input').prop('required')).toEqual(true);
	});
});
