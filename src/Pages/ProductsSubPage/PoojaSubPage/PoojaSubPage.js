import React from 'react';
import { useParams } from 'react-router-dom';
import {
    specialPoojaKit,
    brassPoojaProducts,
    spiritualAndReligious,
    medicinalAndHerbal,
    agriculturalAndNatural
} from '../../Products/Pooja/Pooja';

function PoojaSubPage() {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);

    // Merge all products into a single array
    const allProducts = [
        ...specialPoojaKit,
        ...brassPoojaProducts,
        ...spiritualAndReligious,
        ...medicinalAndHerbal,
        ...agriculturalAndNatural
    ];

    // Find matching product
    const product = allProducts.find(item => item.name === decodedName);

    if (!product) {
        return (
            <div className="container mt-5">
                <h3>Product not found.</h3>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>{product.name}</h2>
        </div>
    );
}

export default PoojaSubPage;
