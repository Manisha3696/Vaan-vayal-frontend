import React from 'react';
import { useParams } from 'react-router-dom';
import { FlourVarieties } from '../../Products/Flour/Flour';
import Flour from '../../Products/Flour/Flour';

function FlourSubPage() {
    const { name } = useParams();
    const Flour = FlourVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Flour) {
        return <div className="container mt-5"><h3>Flour variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Flour.name}</h2>
        </div>
    );
}

export default FlourSubPage;