import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
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
        404 - <Link to="/">GO HOME</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/create">Create Expense</NavLink>
        <NavLink to="/edit">Edit Expense</NavLink>
        <NavLink to="/help">Help</NavLink>
    </header>
)

const router = (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<ExpenseDashboardPage />} />
                <Route path='/create' element={<AddExpensePage />} />
                <Route path='/edit' element={<EditExpensePage />} />
                <Route path='/help' element={<HelpPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('app'));
