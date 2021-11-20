import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioItemPage = (props) => {
    const params = useParams();
    return (
        <div>
            <h1>A Thing I've Done</h1>
            <p>This page is for the item with the id of {params.id}</p>
        </div>
    );
}

export default PortfolioItemPage;
