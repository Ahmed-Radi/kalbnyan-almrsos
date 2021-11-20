import React from 'react'
import {useParams} from 'react-router-dom'

export default function PortfolioID() {
    const params = useParams();
    return (
        <div>
            The id is: {params.id}
        </div>
    )
}
