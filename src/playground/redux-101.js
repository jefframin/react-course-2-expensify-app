import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
               count: state.count + action.incrementBy
            }
        case 'DECREMENT': 
            return {
               count: state.count - action.decrementBy
            }
        case 'RESET': 
            return {
               count: 0
            }
        default:
            return state;
    }
})

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementCount({ incrementBy: 5 }))

console.log('^^^ after increment: ')

store.dispatch(incrementCount())

console.log('^^^ after increment: ')

store.dispatch(resetCount())

console.log('^^^ after reset: ')

store.dispatch(decrementCount({ decrementBy: 3 }))

console.log('^^^ after decrement: ')

store.dispatch(decrementCount())

console.log('^^^ after decrement: ')