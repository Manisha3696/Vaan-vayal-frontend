import React from 'react';
import { useParams } from 'react-router-dom';
import { MasalaVarieties } from '../../Products/Masala/Masala';

function MasalaSubPage() {
    const { name } = useParams();
    const Masala = MasalaVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Masala) {
        return <div className="container mt-5"><h3>Masala variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Masala.name}</h2>
        </div>
    );
}

export default MasalaSubPage;