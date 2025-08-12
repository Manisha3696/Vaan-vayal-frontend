import React from 'react';
import { Link } from 'react-router-dom';
import Sancks1 from '../../../images/snacks/peanut-chikkles--exporter-vaan-vayal-enterprises.jpg';
import Sancks2 from '../../../images/snacks/peanut-chikki-powder-exporter-vaan-vayal-enterprises.jpg';
import Sancks3 from '../../../images/snacks/sesame-balls-exporter-vaan-vayal-enterprises.jpg';
import Sancks4 from '../../../images/snacks/black-sesame-balls-exporter-vaan-vayal-enterprises.jpg';
import Sancks5 from '../../../images/snacks/peanut-salt-exporter-vaan-vayal-enterprises.jpg';
import Sancks6 from '../../../images/snacks/peanut-chilli-exporter-vaan-vayal-enterprises.jpg';
import Sancks7 from '../../../images/snacks/peanut-pepper-exporter-vaan-vayal-enterprises.jpg';
import Sancks8 from '../../../images/snacks/kamarcut-exporter-vaan-vayal-enterprises.jpg';
import Sancks9 from '../../../images/snacks/hot-mixture-exporter-vaan-vayal-enterprises.jpg';
import Sancks10 from '../../../images/snacks/garlic-mixture-exporter-vaan-vayal-enterprises.jpg';
import Sancks11 from '../../../images/snacks/chana-fry-exporter-vaan-vayal-enterprises.jpg';
import Sancks12 from '../../../images/snacks/kadalai-paruppu-exporter-vaan-vayal-enterprises.jpg';
import Sancks13 from '../../../images/snacks/tabioca-chips-exporter-vaan-vayal-enterprises.jpg';
import Sancks14 from '../../../images/snacks/tapioca-sticks-exporter-vaan-vayal-enterprises.jpg';
import Sancks15 from '../../../images/snacks/thattai-vadai-exporter-vaan-vayal-enterprises.jpg';
import Sancks16 from '../../../images/snacks/banana-chips-exporter-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/snacks/snacks-banner.jpg';

const SnacksVarieties = [
    { id: 1, name: "Peanut Chikkles", image: Sancks1 },
    { id: 2, name: "Peanut Chikki Powder", image: Sancks2 },
    { id: 3, name: "White Sesame Balls", image: Sancks3 },
    { id: 4, name: "Black Sesame Balls", image: Sancks4 },
    { id: 5, name: "Peanut Salt", image: Sancks5 },
    { id: 6, name: "Peanut Chilli ", image: Sancks6 },
    { id: 7, name: "Peanut Pepper ", image: Sancks7 },
    { id: 8, name: "Kamarcut ", image: Sancks8 },
    { id: 9, name: "Hot Mixture ", image: Sancks9 },
    { id: 10, name: "Garlic Mixture ", image: Sancks10 },
    { id: 11, name: "Chana Fry", image: Sancks11 },
    { id: 12, name: "Kadalai Paruppu", image: Sancks12 },
    { id: 13, name: "Tapioca Chips  ", image: Sancks13 },
    { id: 14, name: "Tapioca Stick  ", image: Sancks14 },
    { id: 15, name: "Thattai vadai", image: Sancks15 },
    { id: 16, name: "Banana Chips", image: Sancks16 },

];

function Snacks() {
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
                                Snacks
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
                    {SnacksVarieties.map((item) => (
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
                                <Link to={`/Snacks/${encodeURIComponent(item.name)}`}>
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
                                            to={`/Snacks/${encodeURIComponent(item.name)}`}
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

export default Snacks;
export { SnacksVarieties };
