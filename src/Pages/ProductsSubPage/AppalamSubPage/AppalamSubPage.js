import React from 'react';
import { useParams } from 'react-router-dom';
import { AppalamVarieties } from '../../Products/Appalam/Appalam';

function AppalamSubPage() {
    const { name } = useParams();
    const Appalam = AppalamVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Appalam) {
        return <div className="container mt-5"><h3>Appalam variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Appalam.name}</h2>
        </div>
    );
}

export default AppalamSubPage;
