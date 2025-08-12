import React from 'react';
import { useParams } from 'react-router-dom';
import { RavaVarieties } from '../../Products/Rava/Rava';

function RavaSubPage() {
    const { name } = useParams();
    const Rava = RavaVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Rava) {
        return <div className="container mt-5"><h3>Rava variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Rava.name}</h2>
        </div>
    );
}

export default RavaSubPage;