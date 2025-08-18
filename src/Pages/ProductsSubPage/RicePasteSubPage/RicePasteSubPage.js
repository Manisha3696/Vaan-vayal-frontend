import React from 'react';
import { useParams } from 'react-router-dom';
import { ricePasteVarieties } from '../../Products/RicePaste/RicePaste';

function RicePasteSubPage() {
    const { name } = useParams();
    const ricePaste = ricePasteVarieties.find(r => r.name === decodeURIComponent(name));

    if (!ricePaste) {
        return <div className="container mt-5"><h3>Rice Paste variety not found.</h3></div>;
    }

    return (
        <div className="container mt-5">
            <h2>{ricePaste.name}</h2>
        </div>
    );
}

export default RicePasteSubPage;
