import React from 'react';
import { Link } from 'react-router-dom';
import Spices1 from '../../../images/Spices/turmeric-expoters-vaan-vayal.jpg';
import Spices2 from '../../../images/Spices/fenugreek-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices3 from '../../../images/Spices/fennel-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices4 from '../../../images/Spices/cumin-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices5 from '../../../images/Spices/cumin-powdwe-expoters-vaan-vayal-enterprises.jpg';
import Spices6 from '../../../images/Spices/caraway-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices7 from '../../../images/Spices/ajwain-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices8 from '../../../images/Spices/anise-expoters-vaan-vayal-enterprises.jpg';
import Spices9 from '../../../images/Spices/fenugreek-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices10 from '../../../images/Spices/coriander-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices11 from '../../../images/Spices/coriander-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices12 from '../../../images/Spices/black-pepper-expoters-vaan-vayal-enterprises.jpg';
import Spices13 from '../../../images/Spices/black-pepper-crushed-expoters-vaan-vayal-enterprises.jpg';
import Spices14 from '../../../images/Spices/poppy-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices15 from '../../../images/Spices/sesam-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices16 from '../../../images/Spices/green-cardamom-expoters-vaan-vayal-enterprises.jpg';
import Spices17 from '../../../images/Spices/cinnamom-quills-expoters-vaan-vayal-enterprises.jpg';
import Spices18 from '../../../images/Spices/cinnamom-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices19 from '../../../images/Spices/cloves-expoters-vaan-vayal-enterprises.jpg';
import Spices20 from '../../../images/Spices/nutmeg-expoters-vaan-vayal-enterprises.jpg';
import Spices21 from '../../../images/Spices/saffron-expoters-vaan-vayal-enterprises.jpg';
import Spices22 from '../../../images/Spices/dried-red-chilli-expoters-vaan-vayal-enterprises.jpg';
import Spices23 from '../../../images/Spices/crushed-red-chilli-expoters-vaan-vayal-enterprises.jpg';
import Spices24 from '../../../images/Spices/red-chilli-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices25 from '../../../images/Spices/paprika-expoters-vaan-vayal-enterprises.jpg';
import Spices26 from '../../../images/Spices/asafoetida-powder-expoters-vaan-vayal-enterprises.jpg';

import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Spices/Spices-banner-expoters-vaan-vayal-enterprises.jpg';

const SpicesVarieties = [
    { id: 1, name: "Turmeric Powder", image: Spices1 },
    { id: 2, name: "fennel Seeds", image:Spices2 },
    { id: 3, name: "Fennel powder", image: Spices3 },
    { id: 4, name: "Cumin Seeds", image: Spices4 },
    { id: 5, name: "Cumin Powder", image: Spices5 },
    { id: 6, name: "Caraway Seeds", image: Spices6 },
    { id: 7, name: "Ajwain Seeds", image: Spices7 },
    { id: 8, name: "Anice Seeds", image: Spices8 },
    { id: 9, name: "Fenugreek Seeds", image: Spices9 },
    { id: 10, name: "Coriander Seeds", image:  Spices10 },
    { id: 11, name: "Coriander Powder", image:  Spices11 },
    { id: 12, name: "Black pepper Whole", image:  Spices12 },
    { id: 13, name: "Black pepper crushed", image: Spices13 },
    { id: 14, name: "Poppy Seeds ", image:  Spices14 },
    { id: 15, name: "sesame Seeds", image:  Spices15 },
    { id: 16, name: "Green cardamom", image:  Spices16 },
    { id: 17, name: "Cinnamom Quills", image: Spices17 },
    { id: 18, name: "Cinnamom Powder", image:  Spices18 },
    { id: 19, name: "Cloves", image:  Spices19 },
    { id: 20, name: "Nutmeg", image:  Spices20 },
    { id: 21, name: "Saffron ", image: Spices21 },
    { id: 22, name: "Dried Red Chilli", image:  Spices22 },
    { id: 23, name: "Crushed Red Chilli", image:  Spices23 },
    { id: 24, name: "Red Chilli Powdwer", image:  Spices24 },
    { id: 25, name: "Paprika", image:  Spices25 },
    { id: 26, name: "Asafoetida Powder ", image: Spices26 },

];

function Spices() {
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
                                Spices
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
                    {SpicesVarieties.map((item) => (
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
                                <Link to={`/Spices/${encodeURIComponent(item.name)}`}>
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
                                            to={`/Spices/${encodeURIComponent(item.name)}`}
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

export default Spices;
export { SpicesVarieties };
