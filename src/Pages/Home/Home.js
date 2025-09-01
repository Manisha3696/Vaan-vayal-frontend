import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import bannerImage from '../../images/Home/banner-1.png';
import choose from '../../images/Home/choose-bg.jpg';
import category1 from '../../images/Home/pooja-bg.jpg';
import category2 from '../../images/Home/rice.jpg';
import category3 from '../../images/Home/flour.jpg'
import category4 from '../../images/Home/spices.jpg';
import '../../Css/Style.css'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",

    });
  }, []);
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
      <section data-aos="fade-up" className="spices-banner">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="px-5">
              <div data-aos="fade-up" className="text-section">
                <h1 className="display-5 fw-bold">
                  Discover the <span className="highlight">True Essence</span> of Spices
                </h1>
                <p className="text-muted fs-5">
                  Experience purity and bold flavors in every pinch. Handpicked, sun-dried, and packed with love from farm to kitchen.
                </p>
                <Button className="fw-semibold px-4 py-2 yellow-button">Explore Our Spices</Button>
              </div>
            </Col>
            <Col md={6} className="image-section">
              <div data-aos="fade-up" className="curved-image-wrapper">
                <img src={bannerImage} alt="Saffron Spices" className="curved-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section data-aos="fade-up" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Top Categories</h2>
          <Row className="g-4 justify-content-center">
            {[
              { name: 'Pooja', image: category1, link: '/pooja-products' },
              { name: 'Spices', image: category2, link: '/Spices' },
              { name: 'Flours', image: category3, link: '/Flour' },
              { name: 'Rice', image: category4, link: '/Rice' },
            ].map((cat, i) => (
              <Col key={i} md={3} sm={6} xs={12}>
                <Link to={cat.link} className="text-decoration-none text-dark">
                  <Card className="text-center h-100 shadow-sm border-0 category-card">
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                      <div data-aos="fade-up" className="category-icon mb-3">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="img-fluid"
                          style={{
                            width: '230px',
                            height: '180px',
                            objectFit: 'contain',
                          }}
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
      <section data-aos="fade-up" className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="mb-4 mb-md-0 pe-md-5">
              <img
                src={choose}
                alt="Fresh groceries"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: '85%' }} />
            </Col>
            <Col
              data-aos="fade-up"
              md={5}
              className="mt-n4 mt-md-0" style={{ margin: '75px 0px'}}
            >
              <h2
                className="fw-bold mb-3 fs-3 text-center text-md-start py-4"
              
              >
                Why Choose Vaan Vayal?
              </h2>
              <p
                className="text-center text-md-start mb-0"
                style={{ marginTop: "-5px" }} 
              >
                Vaan Vayal Enterprises brings you nature’s best — fresh, pure, and full of goodness.
                We carefully source our products directly from trusted farms and suppliers to ensure
                you get nothing but authentic taste and uncompromised quality. From aromatic spices
                and wholesome rice to traditional snacks and healthy essentials, every product is packed
                with care to preserve its natural flavor and freshness. With our commitment to hygiene,
                sustainable practices, and customer satisfaction, Vaan Vayal stands for trust you can
                taste in every bite.
              </p>
            </Col>



          </Row>
        </Container>
      </section>
      <section className="py-5 bg-white">
        <Container data-aos="fade-up">
          <p className="text-success text-center fw-semibold mb-3" style={{ fontSize: '25px' }}>Explore Our Services</p>
          <h2 className="text-center fw-bold mb-5 display-6" style={{ fontSize: '30px' }}>
            Pure, Native, and Wholesome <br></br> Delivered Fresh
          </h2>
          <Row className="g-4 justify-content-center">
            {services.map((service, idx) => (
              <Col key={idx} md={4} sm={6}>
                <Card className="text-center h-100 p-3 border-0 shadow-sm service-card">
                  <div data-aos="fade-up" className="icon-wrapper mx-auto mb-3">
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

