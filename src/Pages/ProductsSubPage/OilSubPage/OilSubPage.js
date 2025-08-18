import React from 'react';
import { useParams } from 'react-router-dom';
import { oilVarieties } from '../../Products/Oil/Oil';

function OilSubPage() {
    const { name } = useParams();
    const oil = oilVarieties.find(r => r.name === decodeURIComponent(name));

    if (!oil) {
        return <div className="container mt-5"><h3>Oil variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{oil.name}</h2>
        </div>
    );
}

export default OilSubPage;
