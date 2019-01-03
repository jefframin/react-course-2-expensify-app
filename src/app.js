import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpenseAction } from './actions/expenses'
import { setTextFilterAction } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpenseAction({ description: 'water bill', amount: 1500, created: 3000}))
store.dispatch(addExpenseAction({ description: 'gas bill', amount: 3000, created: 1000}))
store.dispatch(addExpenseAction({ description: 'rent', amount: 109500, created: 500}))

console.log(getVisibleExpenses(store.getState()))

//store.dispatch(setTextFilterAction('water'))
//console.log(getVisibleExpenses(store.getState()))

const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
