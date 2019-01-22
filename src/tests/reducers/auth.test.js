import authReducer from '../../reducers/auth'

test('should handle login', () => {
    const uid = 'qweoifjn'
    const action = { type: 'LOGIN', uid: uid }
    const state = authReducer({}, action)
    expect(state).toEqual({uid: uid})
})

test('should handle logout', () => {
    const action = { type: 'LOGOUT' }
    const state = authReducer({uid: 'qwoe'}, action)
    expect(state).toEqual({})
})