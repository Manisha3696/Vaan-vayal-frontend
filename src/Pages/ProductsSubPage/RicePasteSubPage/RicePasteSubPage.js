import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ricePasteVarieties } from '../../Products/RicePaste/RicePaste';
import backButton from '../../../images/icons-back.png'
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Rice paste/Rice-Paste-Banner-Vaan-Vayal.jpg';
import '../../../Css/Style.css'

const RicePasteSubPage = () => {

    const { name } = useParams();
    const navigate = useNavigate();
    const ricePaste = ricePasteVarieties.find(r => r.name === decodeURIComponent(name));

    if (!ricePaste) {
        return <div className="container mt-5"><h3>Rice Paste variety not found.</h3></div>;
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
                                Rice Paste Varieties
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
                    <h3 style={{ color: "#2e7d32" }}>{ricePaste.name}</h3>
                </div>
                <main className="main mb-5 mx-auto">
                    <div className="product-details-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        <div className="product-image" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                            <img src={ricePaste.image} alt={ricePaste.name} style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div className="product-details" style={{ flex: '1 1 400px' }}>
                            <h3 style={{ color: '#2e7d32', marginBottom: '15px' }}>{ricePaste.title}</h3>
                            <p className="price">{ricePaste.priceRange}</p>
                            <p className="description" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{ricePaste.description}</p>
                            <div className="categories" style={{ fontSize: '14px', color: '#777', marginBottom: '20px' }}>Categories: Best Deals, Organic Rice Paste Exporters</div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default RicePasteSubPage;