import React from 'react';
import { Link } from 'react-router-dom';
import Flour1 from '../../../images/Flour/Ragi-flour-exporter-vann-vayal-enterprises.jpg';
import Flour2 from '../../../images/Flour/Atta-flour-exporter-vann-vayal-enterprises.jpg';
import Flour3 from '../../../images/Flour/steamed-atta-flour-exporter-vann-vayal-enterprises.jpg';
import Flour4 from '../../../images/Flour/white-rice-flour-exporter-vann-vayal-enterprises.jpg';
import Flour5 from '../../../images/Flour/red-rice-flour-exporter-vann-vayal-enterprises.jpg';
import Flour6 from '../../../images/Flour/maida-flour-exporter-vann-vayal-enterprises.jpg';
import Flour7 from '../../../images/Flour/wheat-flour-exporter-vann-vayal-enterprises.jpg';
import Flour8 from '../../../images/Flour/moongdal-flour-exporter-vaan-vayal-enterprises.jpg';
import Flour9 from '../../../images/Flour/mungdal-roasted-flour-exporter-vann-vayal-enterprises.jpg';
import Flour10 from '../../../images/Flour/uraldal-banner.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Flour/Flour-banner-exporter-vann-vayal-enterprises.jpg';

const FlourVarieties = [
  { id: 1, name: "Ragi Flour", image: Flour1 },
  { id: 2, name: "Atta Flour", image: Flour2 },
  { id: 3, name: "Steamed Atta Flour", image: Flour3 },
  { id: 4, name: "White Rice Flour", image: Flour4 },
  { id: 5, name: "Red Rice Flour", image: Flour5 },
  { id: 6, name: "Maida Flour", image: Flour6 },
  { id: 7, name: "Wheat Flour Steamed", image: Flour7 },
  { id: 7, name: "Mung dal Flour", image: Flour8 },
  { id: 7, name: "Roasted Mung Dal Flour", image: Flour9 },
  { id: 7, name: "Urad Flour", image: Flour10 },
];

function Flour() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="position-relative text-white text-center"y
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
                Flour
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
         Pure Grains, Finely Milled
        </h2>

        <div className="row">
          {FlourVarieties.map((item) => (
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
                <Link to={`/Flour/${encodeURIComponent(item.name)}`}>
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
                      to={`/Flour/${encodeURIComponent(item.name)}`}
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

export default Flour;
export { FlourVarieties };
