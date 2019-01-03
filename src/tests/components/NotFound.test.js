import React from 'react'
import NotFound from '../../components/NotFound'
import { shallow } from 'enzyme'

test('should render not found page', () => {
    const wrapper = shallow(<NotFound/>)
    expect(wrapper).toMatchSnapshot()
})