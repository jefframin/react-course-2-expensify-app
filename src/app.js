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

const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))