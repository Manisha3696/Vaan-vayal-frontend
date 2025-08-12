import React from 'react';
import { useParams } from 'react-router-dom';
import { SaltVarieties } from '../../Products/Salt/Salt';
import Salt from '../../Products/Salt/Salt';

function SaltSubPage() {
    const { name } = useParams();
    const Salt = SaltVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Salt) {
        return <div className="container mt-5"><h3>Salt variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{Salt.name}</h2>
        </div>
    );
}

export default SaltSubPage;