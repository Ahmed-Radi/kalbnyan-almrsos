import { createStore, combineReducers } from 'redux';

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
