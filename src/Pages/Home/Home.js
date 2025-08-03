import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import bannerImage from '../../images/spices/banner-1.png'; 
import choose from '../../images/spices/choose-bg.jpg'; 
import category1 from '../../images/spices/pooja-bg.jpg'; 
import category2 from '../../images/spices/rice.jpg'; 
import category3 from '../../images/spices/flour.jpg'
import category4 from '../../images/spices/spices.jpg'; 
import '../../Css/Style.css'
function Home() {
  const services = [
    {
    title: 'Customer Satisfaction',
    icon: 'bi-emoji-smile',
    desc: 'Trusted by Families, Loved for Our Service.',
  },
  {
    title: 'Proper Packaging',
    icon: 'bi-box-seam',
    desc: 'Carefully Packed to Keep Your Groceries Fresh & Safe.',
  },
  {
    title: '24/7 Support',
    icon: 'bi-headset',
    desc: 'Shop with Confidence – 24/7 Support Whenever You Need.',
  }
  ];
  return (
    <div>
  <section className="spices-banner">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="px-5">
            <div className="text-section">
             <h1 className="display-5 fw-bold">
  Discover the <span className="highlight">True Essence</span> of Spices
</h1>
<p className="text-muted fs-5">
  Experience purity and bold flavors in every pinch. Handpicked, sun-dried, and packed with love from farm to kitchen.
</p>
<Button  className="fw-semibold px-4 py-2 yellow-button">Explore Our Spices</Button>
            </div>
          </Col>
          <Col md={6} className="image-section">
            <div className="curved-image-wrapper">
              <img src={bannerImage} alt="Saffron Spices" className="curved-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  <section className="py-5 bg-light">
  <Container>
    <h2 className="text-center mb-4 fw-bold">Top Categories</h2>
    <Row className="g-4 justify-content-center">
      {[
        { name: 'Pooja',  image:category1 },
        { name: 'Spices',  image: category2 },
        { name: 'Flours', image: category3 },
        { name: 'Rice', image: category4 },
      ].map((cat, i) => (
        <Col key={i} md={3} sm={6} xs={12}>
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
              <Card.Text>{cat.count}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
<section className="py-5">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="mb-4 mb-md-0 pe-md-5"> 
        <img
          src={choose}
          alt="Fresh groceries"
          className="img-fluid rounded-4 shadow"
        />
      </Col>

      <Col md={6}>
        <h2
          className="fw-bold mb-3 fs-3 text-center text-md-start"
          style={{ padding: "20px 0" }}
        >
          Why Choose Vaan Vayal?
        </h2>
        <ul
          className="list-unstyled"
          style={{ fontSize: "1rem", lineHeight: "1.7" }}
        >
          {[
            'Sourced directly from trusted native farmers',
            'Zero chemicals — 100% natural and pure',
            'Processed with utmost hygiene and care',
          ].map((point, i) => (
            <li key={i} className="mb-2 d-flex align-items-start">
              <CheckCircleFill className="text-success me-2 mt-1" />
              {point}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  </Container>
</section>
<section className="py-5 bg-white">
      <Container>
        <p className="text-success text-center fw-semibold mb-3"style={{fontSize:'25px'}}>Explore Our Services</p>
        <h2 className="text-center fw-bold mb-5 display-6" style={{fontSize:'30px'}}>
          Pure, Native, and Wholesome <br></br> Delivered Fresh
        </h2>
        <Row className="g-4 justify-content-center">
          {services.map((service, idx) => (
            <Col key={idx} md={4} sm={6}>
              <Card className="text-center h-100 p-3 border-0 shadow-sm service-card">
                <div className="icon-wrapper mx-auto mb-3">
                  <i className={`bi ${service.icon} fs-1 text-success`}></i>
                </div>
                <Card.Body>
                  <Card.Title className="fw-semibold fs-5">{service.title}</Card.Title>
                  <Card.Text className="text-muted small mb-4">{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  

    </div>
  );
}

export default Home;

