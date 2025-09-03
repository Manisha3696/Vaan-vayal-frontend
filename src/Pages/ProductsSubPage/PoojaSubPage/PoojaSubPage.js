import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    specialPoojaKit,
    brassPoojaProducts,
    spiritualAndReligious,
    medicinalAndHerbal,
    agriculturalAndNatural
} from '../../Products/Pooja/Pooja';
import backButton from '../../../images/icons-back.png';
import { Container, Row, Col, Table } from 'react-bootstrap';
import banner from '../../../images/Pooja/Banner.jpg';
import '../../../Css/Style.css';

const PoojaSubPage = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const decodedName = decodeURIComponent(name);

    const allProducts = [
        ...specialPoojaKit,
        ...brassPoojaProducts,
        ...spiritualAndReligious,
        ...medicinalAndHerbal,
        ...agriculturalAndNatural
    ];

    const product = allProducts.find(item => item.name === decodedName);

    if (!product) {
        return (
            <div className="container mt-5">
                <h3>Product not found.</h3>
            </div>
        );
    }

    const renderDetails = () => {
        if (product.details && specialPoojaKit.some(item => item.name === product.name)) {
            const hasSubNameThree = product.details.some(detail => detail.subNamethree && detail.subNamethree.trim() !== '');

            return (
                <div className="details-section">
                    <h4 style={{ color: '#2e7d32', marginBottom: '25px', textAlign: "start" }}>Pooja Kit</h4>
                    <Table striped bordered style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'start' }} responsive>
                        <thead>
                            <tr style={{ backgroundColor: '#f7e0a1ff', textAlign: 'left' }}>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Pooja Samagri</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Suganda Dhravyam Powder</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Poornahuthi</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Dry Fruits</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Vasthram</th>
                                {hasSubNameThree && (
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Additional Items</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {product.details.map((detail, index) => (
                                <tr key={index} style={{ border: '1px solid #ddd' }}>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{detail.name}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{detail.quantity || '-'}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{detail.subName || '-'}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{detail.subNameone || '-'}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{detail.subNametwo || '-'}</td>
                                    {hasSubNameThree && (
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{detail.subNamethree || '-'}</td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            );
        }
        return null;
    };

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
                                Pooja Varieties
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="organic-shop container px-4 py-6">
                <div className="mt-5 mb-2 d-flex justify-content-start gap-4 align-items-center">
                    <img
                        src={backButton}
                        alt="Back Button"
                        width="28"
                        height="28"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(-1)}
                    />
                    <h3 style={{ color: '#2e7d32' }}>{product.name}</h3>
                </div>
                <main className="main mb-5 mx-auto">
                    <div className="product-details-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        <div className="product-image" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div className="product-details" style={{ flex: '1 1 400px' }}>
                            <h3 style={{ color: '#2e7d32', marginBottom: '15px' }}>{product.title}</h3>
                            {product.priceRange && <p className="price" style={{ fontSize: '18px', color: '#555' }}>{product.priceRange}</p>}
                            <p className="description" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                                {product.description}
                            </p>
                            <div className="categories" style={{ fontSize: '14px', color: '#777', marginBottom: '20px' }}>
                                Categories: Best Deals, Organic Pooja Products Exporters
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className='container mb-5'>
                <div className='row'>
                    {renderDetails()}
                </div>
            </div>
            <style>
                {`
          @media (max-width: 768px) {
            .product-details-container {
              flex-direction: column;
              align-items: center;
            }
            .product-image {
              max-width: 100%;
            }
            .product-details {
              text-align: center;
            }
            table {
              fontSize: 12px;
            }
            th, td {
              padding: 8px;
            }
          }
        `}
            </style>
        </>
    );
};

export default PoojaSubPage;