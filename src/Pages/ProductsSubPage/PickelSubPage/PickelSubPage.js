import React from 'react';
import { useParams } from 'react-router-dom';
import { PickelVarieties } from '../../Products/Pickels/Pickels';

function PickelSubPage() {
    const { name } = useParams();
    const Pickel = PickelVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Pickel) {
        return <div className="container mt-5"><h3>Pickel variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Pickel.name}</h2>
        </div>
    );
}

export default PickelSubPage;