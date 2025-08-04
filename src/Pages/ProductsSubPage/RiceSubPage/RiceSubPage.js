import React from 'react';
import { useParams } from 'react-router-dom';
import { riceVarieties } from '../../Products/Rice/Rice';

function RiceSubPage() {
    const { name } = useParams();
    const rice = riceVarieties.find(r => r.name === decodeURIComponent(name));

    if (!rice) {
        return <div className="container mt-5"><h3>Rice variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{rice.name}</h2>
        </div>
    );
}

export default RiceSubPage;
