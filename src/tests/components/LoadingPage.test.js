import React from 'react'
import LoadingPage from '../../components/LoadingPage'
import { shallow } from 'enzyme'

test('should render loading page', () => {
    const wrapper = shallow(<LoadingPage/>)
    expect(wrapper).toMatchSnapshot()
})