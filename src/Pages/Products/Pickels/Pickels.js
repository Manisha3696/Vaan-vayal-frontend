import React from 'react';
import { Link } from 'react-router-dom';
import Pickel1 from '../../../images/Pickle/garlic-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel2 from '../../../images/Pickle/lime-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel3 from '../../../images/Pickle/amla-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel4 from '../../../images/Pickle/mango-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel5 from '../../../images/Pickle/citron-pickel-exporter-vaan-vayal-enterprises.jpg';
import Pickel6 from '../../../images/Pickle/green-chilli-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel7 from '../../../images/Pickle/onion-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel8 from '../../../images/Pickle/tomato-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel9 from '../../../images/Pickle/brinjal-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel10 from '../../../images/Pickle/cury-leaf-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel11 from '../../../images/Pickle/coriander-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel12 from '../../../images/Pickle/ginger-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel13 from '../../../images/Pickle/vadu-mangai-pickle-exporter-vaan-vayal-enterprises.jpg';

import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Pickle/pickle-banner.jpg';

const PickelVarieties = [
    { id: 1, name: "Garlic Pickle", image: Pickel1 },
    { id: 2, name: "Lime Pickle", image:Pickel2 },
    { id: 3, name: "Amla Pickle", image: Pickel3 },
    { id: 4, name: "Mango Pickle", image: Pickel4 },
    { id: 5, name: "Citron Pickle", image: Pickel5 },
    { id: 6, name: "Green Chilli Pickle", image: Pickel6 },
    { id: 7, name: "Onion Pickle", image: Pickel7 },
    { id: 8, name: "Tomato Pickle", image: Pickel8 },
    { id: 9, name: "Brinjal Pickle", image: Pickel9 },
    { id: 10, name: "Curry Leaf Pickle", image:  Pickel10 },
    { id: 11, name: "Coriander Leaf Pickle", image:  Pickel11 },
    { id: 12, name: "Ginger Pickle", image:  Pickel12 },
    { id: 13, name: "Vadu Mangai Pickle", image: Pickel13 },
    
];

function Pickel() {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="position-relative text-white text-center"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '230px',
                    overflow: 'hidden',
                }}
            >
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.34)' }}
                ></div>

                <Container className="position-relative z-1 h-100 d-flex align-items-center justify-content-center">
                    <Row className="w-100">
                        <Col className="px-3 px-md-3 py-5">
                            <h1 className="fw-bold display-6" style={{ color: 'white', fontSize: '52px' }}>
                                Pickle
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Product Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
                    Authentic Taste, Worldwide Trust
                </h2>

                <div className="row">
                    {PickelVarieties.map((item) => (
                        <div
                            key={item.id}
                            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                        >
                            <div
                                className="product h-100"
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: '1px solid #eee',
                                    borderRadius: '6px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                                    backgroundColor: '#f7e0a1ff',
                                    transition: 'transform 0.3s ease',
                                }}
                            >
                                <Link to={`/Pickel/${encodeURIComponent(item.name)}`}>
                                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                width: '100%',
                                                height: '200px',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                            }}
                                            className="img-fluid"
                                        />

                                        {/* Overlay Effect */}
                                        <div
                                            className="overlay"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(0,0,0,0.2)',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        ></div>

                                        {/* Discount Tag */}
                                        <span
                                            style={{
                                                position: 'absolute',
                                                top: '10px',
                                                left: '10px',
                                                backgroundColor: '#28a745',
                                                color: '#fff',
                                                padding: '5px 10px',
                                                borderRadius: '4px',
                                                fontSize: '12px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            30%
                                        </span>
                                    </div>
                                </Link>

                                {/* Title */}
                                <div className="text-center" style={{ padding: '10px 10px 15px 10px' }}>
                                    <h6 style={{ fontSize: '16px', fontWeight: 600 }}>
                                        <Link
                                            to={`/Pickel/${encodeURIComponent(item.name)}`}
                                            style={{ textDecoration: 'none', color: '#222' }}
                                        >
                                            {item.name}
                                        </Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hover and Responsive Styles */}
                <style>
                    {`
            .product:hover img {
              transform: scale(1.05);
            }
            .product:hover .overlay {
              opacity: 1;
            }
            @media (max-width: 576px) {
              .product img {
                height: 180px !important;
              }
            }
          `}
                </style>
            </div>
        </div>
    );
}

export default Pickel;
export { PickelVarieties };
