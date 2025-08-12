import React from 'react';
import { Link } from 'react-router-dom';
import masala1 from '../../../images/Masala/Rasam-masal-exporter-Vaan vayal-enterprises.jpg';
import masala2 from '../../../images/Masala/garam-masal-exporter-Vaan vayal-enterprises.jpg';
import masala3 from '../../../images/Masala/sambar-masal-exporter-Vaan vayal-enterprises.jpg';
import masala4 from '../../../images/Masala/pulikuzhambu-banner.jpg';
import masala5 from '../../../images/Masala/chicken-masal-exporter-Vaan vayal-enterprises.jpg';
import masala6 from '../../../images/Masala/fish-masala-exporters-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Masala/masala-banner-exporter-vaan-vayal-enterprises.jpg';

const MasalaVarieties = [
  { id: 1, name: "rasam Masala", image: masala1 },
  { id: 2, name: "Garam Masala", image: masala2 },
  { id: 3, name: "Sambar Powder ", image: masala3 },
  { id: 4, name: "Puli Kolambu Masala ", image: masala4 },
  { id: 5, name: "Chicken Masala ", image: masala5 },
  { id: 6, name: "Fish Masala ", image: masala6 },

];

function Masala() {
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
                Masala
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
          Naturaly Grown, Globally known
        </h2>

        <div className="row">
          {MasalaVarieties.map((item) => (
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
                <Link to={`/Masala/${encodeURIComponent(item.name)}`}>
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
                      to={`/Masala/${encodeURIComponent(item.name)}`}
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

export default Masala;
export { MasalaVarieties };
