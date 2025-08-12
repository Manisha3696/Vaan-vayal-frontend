import React from 'react';
import { useParams } from 'react-router-dom';
import { avalVarieties } from '../../Products/Aval/Aval';

function AvalSubPage() {
    const { name } = useParams();
    const aval = avalVarieties.find(r => r.name === decodeURIComponent(name));

    if (!aval) {
        return <div className="container mt-5"><h3>Aval variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{aval.name}</h2>
        </div>
    );
}

export default AvalSubPage;
