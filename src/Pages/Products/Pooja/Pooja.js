import React, { useState } from "react";
import "../../../Css/Style.css";
import { Col, Container, Row } from "react-bootstrap";
import banner from '../../../images/Pooja/Banner.jpg'
import poojaBanner from '../../../images/Pooja/Pooja-Banner-Vaan-Vayal.png'
import durgaPooja from '../../../images/Pooja/Durga_Pooja_Kit-Vaan-Vayal.JPEG'
import ganapathiPooja from '../../../images/Pooja/Ganapathi-Homam-Kit-Vaan-Vayal.JPEG'
import hariddharshanPooja from '../../../images/Pooja/Haridharshan-Homam-Kit-Vaan-Vayal.JPEG'
import navgrahaPooja from '../../../images/Pooja/Navgraha-Pooja-Kit-Vaan-Vayal.JPEG'
import satyanarayanaPooja from '../../../images/Pooja/Satyanarayana-Pooja-Kit-Vaan-Vayal.JPEG'
import shivaPooja from '../../../images/Pooja/Shiva-Pooja-Kit-Vaan-Vayal.JPEG'
import sudharshanaPooja from '../../../images/Pooja/Sudharshana-Pooja-Kit-Vaan-Vayal.JPEG'
import varalakshmiPooja from '../../../images/Pooja/Varalakshmi-Pooja-Kit-Vaan-Vayal.JPEG'
import kalash from '../../../images/Pooja/Kalash-Vaan-Vayal.jpg'
import bell from '../../../images/Pooja/Bell-Vaan-Vayal.jpg'
import kunkumPlate from '../../../images/Pooja/Kumkum-Plate-Vaan-Vayal.jpg'
import agarbathiHolder from '../../../images/Pooja/Agarbathi-Holder-Vaan-Vayal.jpg'
import thalika from '../../../images/Pooja/Thalika-Vaan-Vayal.jpg'
import lotta from '../../../images/Pooja/Lotta-Vaan-Vayal.jpg'
import kunkumam from '../../../images/Pooja/Kumkum-Vaan-Vayal.jpg'
import kottaiPaakku from '../../../images/Pooja/Kottai-Paakkku-Vaan-Vayal.jpg'
import cowDunkCake from '../../../images/Pooja/Cow-Dunk-Cake-Vaan-Vayal.jpg'
import sivalPaakku from '../../../images/Pooja/Sival-Paakku-Vaan-Vayal.png'
import kopparaThenga from '../../../images/Pooja/Koppara-Thenga-Vaan-Vayal.jpg'
import vettiVer from '../../../images/Pooja/Vetti-Ver-Vaan-Vayal.jpg'
import vibuthi from '../../../images/Pooja/Vibuthi-Vaan-Vayal.jpg'
import omamKit from '../../../images/Pooja/108-Kit-Vaan-Vayal.JPEG'
import paneerWater from '../../../images/Pooja/Paneer-Water-Vaan-Vayal.jpg'
import sambraniPowder from '../../../images/Pooja/Sambrani-Powder-Vaan-Vayal.jpg'
import sandhanamPowder from '../../../images/Pooja/Sandhanam-Powder-Vaan-Vayal.jpg'
import sandhanamKatti from '../../../images/Pooja/Sandhanam-Vaan-Vayal.jpg'
import panchiNool from '../../../images/Pooja/Panchi-Nool-Vaan-Vayal.jpg'
import sambraniCup from '../../../images/Pooja/Sambrani-Cup-Vaan-Vayal.jpg'
import kalasaNool from '../../../images/Pooja/Kalasa-Nool-Vaan-Vayal.jpg'
import karpuram from '../../../images/Pooja/karpuram-Vaan-Vayal.jpg'
import kattiManjal from '../../../images/Pooja/Katti-Manjal-Vaan-Vayal.jpg'
import naamaKatti from '../../../images/Pooja/Naamakatti-Vaan-Vayal.jpg'
import kasthuriManjal from '../../../images/Pooja/Kasthuri-Manjal-Vaan-Vayal.jpg'
import navathaniyam from '../../../images/Pooja/Navathaniyam-Vaan-Vayal.jpg'
import grass from '../../../images/Pooja/Grass-Vaan-Vayal.jpg'
import nel from '../../../images/Pooja/Nel-Vaan-Vayal.jpg'
import mangoStick from '../../../images/Pooja/Mango-Stick-Vaan-Vayal.jpg'
import nelPori from '../../../images/Pooja/Nel-Pori-Vaan-Vayal.jpg'
import arasanKattai from '../../../images/Pooja/Arasan-Kattai-Vaan-Vayal.jpg'
import { Link } from "react-router-dom";

const specialPoojaKit = [
  { id: 1, name: "Sudharshana Pooja Kit", image: sudharshanaPooja },
  { id: 2, name: "Varalakshmi Pooja Kit", image: varalakshmiPooja },
  { id: 3, name: "Shiva Pooja Kit", image: shivaPooja },
  { id: 4, name: "Satyanarayana Pooja Kit", image: satyanarayanaPooja },
  { id: 5, name: "Haridarshan Pooja Kit", image: hariddharshanPooja },
  { id: 6, name: "Navgraha Pooja Kit", image: navgrahaPooja },
  { id: 7, name: "Ganapathi Pooja Kit", image: ganapathiPooja },
  { id: 8, name: "108 Om Thiraviya", image: omamKit },
  { id: 9, name: "Durga Pooja Kit", image: durgaPooja },
];

const brassPoojaProducts = [
  { id: 1, name: "Kalash", image: kalash },
  { id: 2, name: "Bell", image: bell },
  { id: 3, name: "Kunkum Plate", image: kunkumPlate },
  { id: 4, name: "Agarbathi Holder", image: agarbathiHolder },
  { id: 5, name: "Thalika", image: thalika },
  { id: 6, name: "Lotta", image: lotta },
];

const spiritualAndReligious = [
  { id: 1, name: "Kungumam", image: kunkumam },
  { id: 2, name: "Kottai Paakku", image: kottaiPaakku },
  { id: 3, name: "Cow Dunk Cake", image: cowDunkCake },
  { id: 4, name: "Sival Paakku", image: sivalPaakku },
  { id: 5, name: "Koppara Thenga", image: kopparaThenga },
  { id: 6, name: "Vetti Ver", image: vettiVer },
  { id: 7, name: "Vibuthi", image: vibuthi },
  { id: 8, name: "Omam Kit 108", image: omamKit },
];

const medicinalAndHerbal = [
  { id: 1, name: "Paneer Water", image: paneerWater },
  { id: 2, name: "Sambrani Powder", image: sambraniPowder },
  { id: 3, name: "Sandhanam Powder", image: sandhanamPowder },
  { id: 4, name: "Sandhanam Katti", image: sandhanamKatti },
  { id: 5, name: "Panchi Nool", image: panchiNool },
  { id: 6, name: "Sambrani Cup", image: sambraniCup },
  { id: 7, name: "Kalasa Nool", image: kalasaNool },
  { id: 8, name: "Karpuram", image: karpuram },
  { id: 9, name: "Katti Manjal", image: kattiManjal },
  { id: 10, name: "Namaa Katti", image: naamaKatti },
  { id: 11, name: "Kasthuri Manjal", image: kasthuriManjal },
  { id: 12, name: "Navathaniyam", image: navathaniyam },
];

const agriculturalAndNatural = [
  { id: 1, name: "Grass", image: grass },
  { id: 2, name: "Nel", image: nel },
  { id: 3, name: "Mango Stick", image: mangoStick },
  { id: 4, name: "Nel Pori", image: nelPori },
  { id: 5, name: "Arasan Kattai", image: arasanKattai },
];

const Pooja = () => {

  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div
        className="position-relative text-white text-start"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '250px',
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
                Pooja Products
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center align-item-center">
        <div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }} onClick={() => setActiveStep(0)}>Categories</p></div>
        {activeStep === 1 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Special Pooja Kit</p></div>)}
        {activeStep === 2 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Brass Pooja Products</p></div>)}
        {activeStep === 3 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Spiritual and Religious</p></div>)}
        {activeStep === 4 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Medicinal and Herbal</p></div>)}
        {activeStep === 5 && (<div className="d-flex justify-content-center mt-5"><p className="clip-path" style={{ background: "rgb(240, 201, 155)" }}>Agricultural and Natural</p></div>)}
      </div>
      {
        activeStep === 0 ? (
          <>
            <div className="container mt-3 mb-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Special Pooja Kit</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 1 ? 0 : 1)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Brass Pooja Product</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 2 ? 0 : 2)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Spiritual and Religious</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 3 ? 0 : 3)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Medicinal and Herbal</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 4 ? 0 : 4)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardLayoutWeb">
                    <div>
                      <img src={poojaBanner} alt="Image-1" />
                    </div>
                    <div className="d-flex align-items-center justify-content-start">

                      <div>
                        <h5 className="pt-2 pb-1" style={{ fontWeight: 600 }}>Agricultural and Natural</h5>
                        <button className="btn btn-0 btn-success w-100" onClick={() => setActiveStep(activeStep === 5 ? 0 : 5)} style={{ fontSize: "11px" }}>View Sub-Categories<span></span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : activeStep === 1 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Special Pooja Kits
            </h2>
            <div className="row">
              {specialPoojaKit.map((item) => (
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
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
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
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
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
          </div>
        ) : activeStep === 2 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Brass Pooja Products
            </h2>
            <div className="row">
              {brassPoojaProducts.map((item) => (
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
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
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
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
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
          </div>
        ) : activeStep === 3 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Spiritual and Religious Pooja Products
            </h2>
            <div className="row">
              {spiritualAndReligious.map((item) => (
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
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
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
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
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
          </div>
        ) : activeStep === 4 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Medicinal and Herbal Pooja Products
            </h2>
            <div className="row">
              {medicinalAndHerbal.map((item) => (
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
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
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
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
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
          </div>
        ) : activeStep === 5 ? (
          <div className="container py-5">
            <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              Agricultural and Natural Pooja Products
            </h2>
            <div className="row">
              {agriculturalAndNatural.map((item) => (
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
                    <Link to={`/pooja-products/${encodeURIComponent(item.name)}`}>
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
                      <h6 className="mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                        <Link
                          to={`/pooja-products/${encodeURIComponent(item.name)}`}
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
          </div>
        ) : (
          <p>There are no Products to Show.</p>
        )
      }
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
    </>
  );
};

export default Pooja;
export { specialPoojaKit, brassPoojaProducts, spiritualAndReligious, medicinalAndHerbal, agriculturalAndNatural }