import React from 'react';
import { Link } from 'react-router-dom';
import Oil1 from '../../../images/Oil/Sun-Flower-Oil-Vaan-Vayal.jpg';
import Oil2 from '../../../images/Oil/Mustard-Oil-Vaan-Vayal.jpg';
import Oil3 from '../../../images/Oil/Coconut-Oil-Vaan-Vayal.jpg';
import Oil4 from '../../../images/Oil/Peanut-Oil-Vaan-Vayal.jpg';
import Oil5 from '../../../images/Oil/Sesame-Oil-Vaan-Vayal.jpg';
import Oil6 from '../../../images/Oil/Ghee-Vaan-Vayal.jpg';
import Oil7 from '../../../images/Oil/Butter-Vaan-Vayal.jpg';
import Oil8 from '../../../images/Oil/Gingelly-Oil-Vaan-Vayal.avif';
import Oil9 from '../../../images/Oil/Vanaspati-Oil-Vaan-Vayall.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Oil/Oil-Banner.jpg';
import '../../../Css/Style.css'

const oilVarieties = [
    { id: 1, name: "Sun Flower Oil", image: Oil1 },
    { id: 2, name: "Mustard Oil", image: Oil2 },
    { id: 3, name: "Coconut Oil", image: Oil3 },
    { id: 4, name: "Peanut Oil", image: Oil4 },
    { id: 5, name: "Sesame Oil", image: Oil5 },
    { id: 6, name: "Ghee", image: Oil6 },
    { id: 7, name: "Butter", image: Oil7 },
    { id: 8, name: "Gingelly Oil", image: Oil8 },
    { id: 9, name: "Vanaspati Oil", image: Oil9 },
];

function Oil() {
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
                                Oil
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Product Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
                    Pure oils, Global trust
                </h2>

                <div className="row">
                    {oilVarieties.map((item) => (
                        <div
                            key={item.id}
                            className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4"
                        >
                            <div
                                className="product h-80"
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
                                <Link to={`/oil/${encodeURIComponent(item.name)}`}>
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
                                    <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                                        <Link
                                            to={`/oil/${encodeURIComponent(item.name)}`}
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

export default Oil;
export { oilVarieties };
