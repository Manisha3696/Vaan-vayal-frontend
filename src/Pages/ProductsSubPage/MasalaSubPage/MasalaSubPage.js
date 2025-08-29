import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MasalaVarieties } from '../../Products/Masala/Masala';
import backButton from '../../../images/icons-back.png'
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Masala/masala-banner-exporter-vaan-vayal-enterprises.jpg';
import '../../../Css/Style.css'

const MasalaSubPage = () => {

    const { name } = useParams();
    const navigate = useNavigate();
    const Masala = MasalaVarieties.find(r => r.name === decodeURIComponent(name));

    if (!Masala) {
        return <div className="container mt-5"><h3>Masala variety not found.</h3></div>;
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
                                Masala Varieties
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
                    <h3 style={{ color: "#2e7d32" }}>{Masala.name}</h3>
                </div>
                <main className="main mb-5 mx-auto">
                    <div className="product-details-container">
                        <div className="product-image">
                            <img src={Masala.image} alt={Masala.name} style={{ width: "80%" }} />
                        </div>
                        <div className="product-details">
                            <h3 style={{ color: "#2e7d32" }}>{Masala.title}</h3>
                            <p className="price">{Masala.priceRange}</p>
                            <p className="description">{Masala.description}</p>
                            <div className="categories">Categories: Best Deals, Organic Masala Exporters</div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default MasalaSubPage;