import React from 'react';
import { useParams } from 'react-router-dom';
import { SpicesVarieties } from '../../Products/Spices/Spices';
import Spices from '../../Products/Spices/Spices';

function SpicesSubPage() {
    const { name } = useParams();
    const Spices = SpicesVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Spices) {
        return <div className="container mt-5"><h3>Spices variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Spices.name}</h2>
        </div>
    );
}

export default SpicesSubPage;