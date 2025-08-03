import React from 'react';
import banner from '../../images/spices/mosala.png';
import spices1 from '../../images/categary/spices.jpg';
import pickel from '../../images/categary/pickel.jpg';
import flour from '../../images/categary/flour.jpg';
import masala1 from '../../images/categary/masala.jpg';
import oil1 from '../../images/categary/oil.jpg';
import rice1 from '../../images/categary/rice.jpg';
import snacks1 from '../../images/categary/snacks.jpg';
import soya1 from '../../images/categary/soya.jpg';
import salt1 from '../../images/categary/salt.jpg';
import appalam1 from '../../images/categary/appalam.jpg';
import jaggery1 from '../../images/categary/jaggery.jpg';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faUserShield, faBoxesPacking, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import iconlogo from '../../images/logo-1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  const features = [
    { icon: faUserShield, title: 'Quality', description: 'Fresh Groceries Delivered Straight to Your Doorstep!' },
    { icon: faHandshake, title: 'Customer Satisfiction', description: 'Trusted by Families, Loved for Our Service.' },
    { icon: faBoxesPacking, title: 'Proper Packaging', description: 'Carefully Packed to Keep Your Groceries Fresh & Safe.' },
    { icon: faPhoneAlt, title: '24/7 Support', description: 'Shop with Confidence – 24/7 Support Whenever You Need.' },
  ]

  const categories = [
    { title: 'Spices', img: spices1 },
    { title: 'Pickles', img: pickel },
    { title: 'Flour', img: flour },
    { title: 'Masala', img: masala1 },
    { title: 'Oil', img: oil1 },
    { title: 'Rice', img: rice1 },
    { title: 'Snacks', img: snacks1 },
    { title: 'Soya', img: soya1 },
    { title: 'Salt', img: salt1 },
    { title: 'Appalam', img: appalam1 },
    { title: 'Jaggery', img: jaggery1 },
  ];

  return (
    <div data-aos="fade-up" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* First Section - Green Background */}
      <div style={{ backgroundColor: '#e6f3e6' }}>
        <div data-aos="fade-up" className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ color: '#4CAF50', fontWeight: '600', letterSpacing: '1px' }}>ALL NATURAL PRODUCTS</p>
              <h1 style={{ fontSize: '38px', fontWeight: 'bold', color: '#2E7D32' }}>
                Fresh and Healthy<br />
                <span style={{ color: '#1B5E20' }}>Spices</span> Organic Market
              </h1>
              <p style={{ color: '#4b4b4b', fontSize: '16px', marginTop: '15px' }}>
                Organic spices sourced from natural farms and carefully packed to bring you purity and taste that meets the standards of tradition.
              </p>
              <button
                className="btn btn-success mt-4 px-4 py-2"
                style={{ borderRadius: '5px', fontWeight: '500' }}
                onClick={() => window.location.href = '/contact'}
              >
                SHOP NOW
              </button>
            </div>
            <div data-aos="fade-up" className="col-md-6 text-center">
              <img
                src={banner}
                alt="Spices Banner"
                className="img-fluid rounded"
                style={{ maxHeight: '400px', borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div  style={{ backgroundColor: '#ffffff' }}>
        <div data-aos="fade-up" className="container py-5">
          <h4 style={{ fontWeight: 'bold', color: '#000', fontSize:'38px', padding: '60px 0px' }}>Category</h4>
          <div data-aos="fade-up" className="row text-center mt-4">
            {categories.map((item, idx) => (
              <div className="col-6 col-md-2 mb-4" key={idx}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid rounded-circle border"
                  style={{
                    width: '90px',
                    height: '90px',
                    objectFit: 'cover',
                    border: '2px solid #4CAF50',
                    padding: '5px',
                  }}
                />
                <p className="mt-2" style={{ fontWeight: '500', color: '#333' }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div data-aos="fade-up" style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', padding: '50px 0' }}>
  <div style={{ padding: '50px 70px' }}>
    
    
    <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'center' }}>
      <nav className="navbar">
        <img
          src={iconlogo}
          alt="icon Logo"
          style={{ maxWidth: '90px', height: 'auto' }}
        />
      </nav>
    </div>
    <div data-aos="fade-up" style={{ textAlign: 'center', margin: '40px auto', maxWidth: '500px' }}>
      <h1 style={{ fontSize: '29px', fontWeight: 'bold' }}>VaanVayal - Global Food Importers & Exporters</h1>
    </div>
    <div data-aos="fade-up">
      <div style={{ width: '100%', padding: '15px', textAlign: 'justify', maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          "As a leading exporter of premium quality food products, VaanVayal is committed to bringing the rich
          and diverse flavors of India to the world. Our extensive range of food and spice exports is sourced directly
          from trusted farms and suppliers, ensuring freshness and authenticity in every shipment. With a strong focus
          on meeting international quality standards, we guarantee that our products reach global markets with the
          highest level of care and excellence. VaanVayal is dedicated to supporting your business by delivering
          the finest Indian produce to every corner of the globe."
        </p>
      </div>
    </div>


    <div data-aos="fade-up" style={{ marginTop: '40px' }}>
      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '25px',
                textAlign: 'center',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(7 113 23)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}
              >
                <FontAwesomeIcon icon={feature.icon} style={{ color: '#ffffff', fontSize: '2rem' }} />
              </div>
              <div>
                <h5 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{feature.title}</h5>
                <p style={{ margin: 0 }}>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
{/* last section */}
<div data-aos="fade-up" 
  style={{
    backgroundImage: `url(${require('../../images/spices/flight.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 20px',
    fontFamily: 'Arial, sans-serif',
  }}
>
  <div data-aos="fade-up"  className="container text-center text-white">
    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '50px', color: '#fff' }}>
      Why Choose Us?
    </h2>

    <div data-aos="fade-up"  className="row justify-content-center g-4">
      {/* Card 1 */}
      <div data-aos="fade-up" className="col-md-4">
        <div className="bg-white text-dark rounded shadow p-4 h-100">
          <i className="bi bi-recycle fs-1 text-success mb-3"></i>
          <h5 className="fw-bold text-success">Sustainable Practices</h5>
          <p>Committed to nature with responsible sourcing and green methods.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div data-aos="fade-up"  className="col-md-4">
        <div className="bg-white text-dark rounded shadow p-4 h-100">
          <i className="bi bi-cart-fill fs-1 text-success mb-3"></i>
          <h5 className="fw-bold text-success">Wide Selection</h5>
          <p>Discover our extensive range of premium, handpicked products curated to meet diverse needs.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div data-aos="fade-up"  className="col-md-4">
        <div className="bg-white text-dark rounded shadow p-4 h-100">
          <i className="bi bi-person-heart fs-1 text-success mb-3"></i>
          <h5 className="fw-bold text-success">Exceptional Customer Service</h5>
          <p>Experience prompt, friendly support dedicated to your satisfaction at every step.</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Home;
