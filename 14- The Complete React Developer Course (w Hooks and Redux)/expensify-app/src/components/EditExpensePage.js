import React from 'react';
import { useParams } from "react-router-dom";

const EditExpensePage = () => {
    const params = useParams();
    return (
        <div>
            <p>Editing the expenses with the id of {params.id} </p>
        </div>
    )
}

export default EditExpensePage