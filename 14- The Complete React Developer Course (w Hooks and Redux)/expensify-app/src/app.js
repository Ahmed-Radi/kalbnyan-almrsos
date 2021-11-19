import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        <p>Ahmed Radi</p>
    </div>
)

const AddExpensePage = () => (
    <div>
        <p>AddExpensePage</p>
    </div>
)

const EditExpensePage = () => (
    <div>
        <p>EditExpensePage</p>
    </div>
)

const HelpPage = () => (
    <div>
        <p>HelpExpensePage</p>
    </div>
)

const NotFoundPage = () => (
    <div>
        <p>404</p>
    </div>
)

const router = (
    <Router>
        <Routes>
            <Route path='/' element={<ExpenseDashboardPage />} />
            <Route path='/create' element={<AddExpensePage />} />
            <Route path='/edit' element={<EditExpensePage />} />
            <Route path='/help' element={<HelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
)

ReactDOM.render(router, document.getElementById('app'));
