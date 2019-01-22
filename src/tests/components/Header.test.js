import React from 'react'
import { Header } from '../../components/Header'
import { shallow } from 'enzyme'

test('should render header', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    const logoutSpy = jest.fn()
    const wrapper = shallow(<Header startLogout={logoutSpy}/>)
    wrapper.find('button').simulate('click')
    expect(logoutSpy).toHaveBeenCalled()
})
