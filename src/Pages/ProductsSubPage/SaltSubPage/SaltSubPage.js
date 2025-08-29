import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SaltVarieties } from '../../Products/Salt/Salt';
import backButton from '../../../images/icons-back.png'
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Salt/Salt-banner.jpg';
import '../../../Css/Style.css'

const SaltSubPage = () => {

    const { name } = useParams();
    const navigate = useNavigate();
    const Salt = SaltVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Salt) {
        return <div className="container mt-5"><h3>Salt variety not found.</h3></div>;
    }

    return (
        <>
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
                                Salt Varieties
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="organic-shop container px-4 py-6">
                <div className="mt-5 mb-2 d-flex justify-content-start gap-4 align-item-center">
                    <img
                        src={backButton}
                        alt="Back Button"
                        width="28"
                        height="28"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(-1)}
                    />
                    <h3 style={{ color: "#2e7d32" }}>{Salt.name}</h3>
                </div>
                <main className="main mb-5 mx-auto">
                    <div className="product-details-container">
                        <div className="product-image">
                            <img src={Salt.image} alt={Salt.name} style={{ width: "80%" }} />
                        </div>
                        <div className="product-details">
                            <h3 style={{ color: "#2e7d32" }}>{Salt.title}</h3>
                            <p className="price">{Salt.priceRange}</p>
                            <p className="description">{Salt.description}</p>
                            <div className="categories">Categories: Best Deals, Organic Salt Exporters</div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default SaltSubPage;