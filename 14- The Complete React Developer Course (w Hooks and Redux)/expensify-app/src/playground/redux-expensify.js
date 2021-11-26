import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
}))

console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'adasasjpcapvbxvo',
        description: 'Game rent',
        note: 'This is final payment for the game.',
        amount: 850,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // Date or Amount
        startDate: undefined,
        endDate: undefined,
    }
}
