import React from "react";
import '../../../Css/Style.css'
import image1 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal.jpg'
import image2 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png'

const products = [
    { id: 1, name: "Fresh Broccoli - Crisp", image: image2 },
    { id: 2, name: "Beef Boneless", image: image1 },
    { id: 3, name: "Almonds", image: image1 },
];

const Flour = () => {
    return (
        <div className="container-fluid bg-body-tertiary">
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Flour;
