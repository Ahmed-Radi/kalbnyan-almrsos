import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({ description: 'Hdi',amount: 20, createdAt: 1000 }))
store.dispatch(addExpense({description: 'new ||',amount: 200}))
store.dispatch(setTextFilter('new'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)

ReactDOM.render(<AppRouter />, document.getElementById('app'));
