import React from 'react'
import { LoginPage } from '../../components/LoginPage'
import { shallow } from 'enzyme'

test('should render login page', () => {
    const wrapper = shallow(<LoginPage/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
    const loginSpy = jest.fn()
    const wrapper = shallow(<LoginPage authenticate={loginSpy}/>)
    wrapper.find('button').simulate('click')
    expect(loginSpy).toHaveBeenCalled()
})