import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id,updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
            case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate
                }
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    expense: expenseReducer,
    filters: filterReducer,
}))

store.subscribe(() => {
    console.log(store.getState())
})

// const expenseOne = store.dispatch(addExpense({ description: 'Hi I am Ahmed Radi',amount: 200000 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Hi I am Ali Radi',amount: 1 }));
// // store.dispatch(addExpense({ description: 'Hi I am HHH Radi',amount: 100 }));
// // store.dispatch(addExpense({ description: 'Hi I am GOOD Radi',amount: 230 }));

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())

store.dispatch(setEndDate(1250))

const demoState = {
    expense: [{
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
