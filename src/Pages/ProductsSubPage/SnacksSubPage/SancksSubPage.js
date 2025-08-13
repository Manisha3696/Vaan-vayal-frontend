import React from 'react';
import { useParams } from 'react-router-dom';
import { SnacksVarieties } from '../../Products/Snacks/Sancks';

function SnacksSubPage() {
    const { name } = useParams();
    const Snacks = SnacksVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Snacks) {
        return <div className="container mt-5"><h3>Snacks variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Snacks.name}</h2>
        </div>
    );
}

export default SnacksSubPage;