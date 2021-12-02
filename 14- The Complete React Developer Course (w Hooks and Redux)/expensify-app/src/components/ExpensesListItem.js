import React from 'react'

const ExpensesListItem = ({ description, amount, createdAt }) => {
    return (
        <div>
            <h3>{ description }</h3>
            <p>{ amount } - { createdAt }</p>
        </div>
    )
}

export default ExpensesListItem;