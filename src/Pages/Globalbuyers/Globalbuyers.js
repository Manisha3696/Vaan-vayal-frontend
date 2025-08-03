import React from 'react';
import '../../Css/Style.css'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/Global buyers/banner-2.jpg'
import country1 from '../../images/Global buyers/country-1.jpg';
import country2 from '../../images/Global buyers/country-2.jpg';
import country3 from '../../images/Global buyers/country-3.jpg'
import country4 from '../../images/Global buyers/country-4.jpg';
import country5 from '../../images/Global buyers/country-5.jpg';
import country6 from '../../images/Global buyers/country-6.jpg';
import country7 from '../../images/Global buyers/country-7.jpg';
import country8 from '../../images/Global buyers/country-8.jpg';
function Globalbuyers() {
  return (
    <div>
      <div
        className="position-relative text-white text-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '330px',
          overflow: 'hidden',
        }}
      >

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        ></div>

        <Container className="position-relative z-1 h-100 d-flex align-items-center justify-content-center">
          <Row className="w-100">
            <Col className="px-3 px-md-3 py-5" >
              <h1 className="fw-bold display-6 display-md-5" style={{ color: 'white', fontSize: '32px' }}>
                Partner with Vaan Vayal <br />
                Your Trusted Indian Agro Products Exporter
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="py-5 bg-light">
        <Container>
          <h2
            className="text-center mb-4 fw-bold"
            style={{
              fontSize: '20px',
            }}
          >
            Our Journey with International Buyers
          </h2>

          <Row className="g-4 justify-content-center">
            {[
              { name: 'Australia', image: country1, link: '/Contact' },
              { name: 'Malaysia', image: country2, link: '/Contact' },
              { name: 'Singapore', image: country3, link: '/Contact' },
              { name: 'UK', image: country4, link: '/Contact' },
              { name: 'USA', image: country5, link: '/Contact' },
              { name: 'Denmark', image: country6, link: '/Contact' },
              { name: 'Chile', image: country7, link: '/Contact' },
              { name: 'Taiwan', image: country8, link: '/Contact' },
            ].map((cat, i) => (
              <Col key={i} md={3} sm={6} xs={12}>
                <Link to={cat.link} className="text-decoration-none text-dark">
                  <Card className="text-center h-100 shadow-sm border-0 category-card">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <div className="category-icon mb-3">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="img-fluid"
                          style={{ width: '230px', height: '180px', objectFit: 'contain' }}
                        />
                      </div>
                      <Card.Title className="fw-bold">{cat.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Globalbuyers;



