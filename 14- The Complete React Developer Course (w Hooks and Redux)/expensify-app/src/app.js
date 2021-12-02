import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
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

setTimeout(() => {
    store.dispatch(setTextFilter('new 2'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
