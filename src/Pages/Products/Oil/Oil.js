import React from 'react';
import { Link } from 'react-router-dom';
import Oil1 from '../../../images/Oil/Sun-Flower-Oil-Vaan-Vayal.jpg';
import Oil2 from '../../../images/Oil/Mustard-Oil-Vaan-Vayal.jpg';
import Oil3 from '../../../images/Oil/Coconut-Oil-Vaan-Vayal.jpg';
import Oil4 from '../../../images/Oil/Peanut-Oil-Vaan-Vayal.jpg';
import Oil5 from '../../../images/Oil/Sesame-Oil-Vaan-Vayal.jpg';
import Oil6 from '../../../images/Oil/Ghee-Vaan-Vayal.jpg';
import Oil7 from '../../../images/Oil/Butter-Vaan-Vayal.jpg';
import Oil8 from '../../../images/Oil/Gingelly-Oil-Vaan-Vayal.avif';
import Oil9 from '../../../images/Oil/Vanaspati-Oil-Vaan-Vayall.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Oil/Oil-Banner.jpg';
import '../../../Css/Style.css'

const oilVarieties = [
    {
        id: 1,
        name: "Sunflower Oil",
        image: Oil1,
        title: "Sunflower Oil",
        description: "Sunflower Oil, extracted from premium sunflower seeds, offers a light, neutral flavor ideal for versatile cooking. Perfect for frying, sautéing, or baking, its high smoke point ensures crispy results without overpowering dishes. Rich in vitamin E, it’s a heart-healthy choice for everyday meals. Sourced from trusted farms, this oil delivers consistent quality for home cooks. Ideal for stir-fries, salads, or Indian curries, it blends seamlessly with spices and ingredients. A pantry staple, Sunflower Oil suits both traditional and modern recipes, providing a clean taste and reliable performance. Enjoy its light texture and health benefits in every dish, from snacks to gourmet meals."
    },
    {
        id: 2,
        name: "Mustard Oil",
        image: Oil2,
        title: "Mustard Oil",
        description: "Mustard Oil, cold-pressed from premium mustard seeds, delivers a bold, pungent flavor perfect for Indian cuisine. Ideal for tempering curries, pickling, or grilling, its distinctive aroma enhances vegetables, fish, or meats. Rich in omega-3 fatty acids, it’s a healthy choice for traditional cooking. Sourced from quality seeds, this oil ensures robust taste and consistency. Perfect for North Indian dishes like sarson ka saag or marinades, it adds a spicy kick to every recipe. A pantry essential, Mustard Oil brings authentic regional flavor to your kitchen. Enjoy its versatility and health benefits in stir-fries, dressings, or classic Indian meals with ease."
    },
    {
        id: 3,
        name: "Coconut Oil",
        image: Oil3,
        title: "Coconut Oil",
        description: "Coconut Oil, extracted from fresh coconuts, offers a rich, tropical flavor perfect for South Indian cooking and baking. Ideal for curries, dosas, or desserts, its medium smoke point suits frying and sautéing. Rich in healthy fats, it’s great for both culinary and wellness uses. Sourced from premium coconuts, this oil ensures consistent quality and aroma. Perfect for traditional dishes like appams or modern smoothies, it adds a subtle sweetness. A versatile pantry staple, Coconut Oil enhances flavors in sweet or savory recipes. Enjoy its smooth texture and health benefits in cooking, baking, or even as a natural moisturizer, delivering authentic taste and quality."
    },
    {
        id: 4,
        name: "Peanut Oil",
        image: Oil4,
        title: "Peanut Oil",
        description: "Peanut Oil, pressed from high-quality peanuts, offers a mild, nutty flavor and high smoke point, perfect for deep frying and stir-frying. Ideal for Indian snacks like pakoras or Asian dishes, it ensures crispy, golden results. Rich in heart-healthy fats, it’s a great choice for everyday cooking. Sourced from trusted farms, this oil delivers consistent quality and taste. Perfect for curries, roasted vegetables, or marinades, it blends well with bold spices. A pantry essential, Peanut Oil suits both traditional and modern recipes, offering versatility and a subtle nutty profile. Enjoy its reliable performance and health benefits in every dish, from snacks to main courses."
    },
    {
        id: 5,
        name: "Sesame Oil",
        image: Oil5,
        title: "Sesame Oil",
        description: "Sesame Oil, cold-pressed from premium sesame seeds, delivers a rich, nutty flavor ideal for South Indian and Asian cuisines. Perfect for tempering curries, stir-fries, or drizzling over salads, its bold aroma enhances every dish. Rich in antioxidants, it’s a healthy choice for daily cooking. Sourced from quality seeds, this oil ensures consistent taste and performance. Ideal for idlis, chutneys, or marinades, it pairs well with spices and vegetables. A pantry staple, Sesame Oil brings authentic flavor to traditional and modern recipes. Enjoy its deep, aromatic profile and health benefits in cooking or as a finishing oil, adding a distinctive touch to every meal."
    },
    {
        id: 6,
        name: "Ghee",
        image: Oil6,
        title: "Ghee",
        description: "Ghee, clarified butter from premium milk, offers a rich, buttery flavor and high smoke point, perfect for Indian cooking. Ideal for sautéing, frying, or drizzling over rotis and rice, it adds a luxurious taste to dishes. Sourced from trusted dairies, this ghee ensures purity and consistent quality. Perfect for sweets like halwa or savory curries, it enhances flavors in traditional and festive recipes. A pantry essential, Ghee is revered for its aroma and health benefits in Ayurvedic cooking. Enjoy its versatility in baking, roasting, or as a spread, delivering authentic Indian taste and a golden, nutty richness to every dish with ease."
    },
    {
        id: 7,
        name: "Butter",
        image: Oil7,
        title: "Butter",
        description: "Butter, crafted from premium cream, delivers a creamy, rich flavor perfect for baking, spreading, or cooking. Ideal for fluffy cakes, parathas, or as a base for sauces, its smooth texture enhances both sweet and savory dishes. Sourced from trusted dairies, this butter ensures consistent quality and taste. Perfect for Indian recipes like butter chicken or Western dishes like pastries, it adds a luxurious touch. A versatile pantry staple, Butter suits breakfast spreads, grilling, or baking needs. Enjoy its velvety richness and natural flavor in traditional or modern recipes, delivering wholesome taste and reliable performance for every meal, from simple toasts to gourmet creations."
    },
    {
        id: 8,
        name: "Gingelly Oil",
        image: Oil8,
        title: "Gingelly Oil",
        description: "Gingelly Oil, another name for sesame oil, is cold-pressed from premium sesame seeds, offering a nutty, aromatic flavor for South Indian dishes. Perfect for tempering curries, chutneys, or drizzling over idlis, it enhances flavors with its rich profile. Packed with antioxidants, it’s a healthy choice for daily cooking. Sourced from quality seeds, this oil ensures consistent taste and aroma. Ideal for stir-fries, marinades, or traditional recipes, it pairs well with spices and vegetables. A pantry essential, Gingelly Oil brings authentic South Indian taste to your kitchen. Enjoy its versatility and health benefits in every dish, delivering bold flavor and reliable quality."
    },
    {
        id: 9,
        name: "Vanaspati Oil",
        image: Oil9,
        title: "Vanaspati Oil",
        description: "Vanaspati Oil, a hydrogenated vegetable oil, offers a rich, buttery texture ideal for Indian cooking and baking. Perfect for deep-frying snacks like samosas or preparing rich curries, its high smoke point ensures crispy results. Sourced from premium vegetable oils, it delivers consistent quality and a smooth, creamy flavor. Ideal for traditional sweets like gulab jamun or savory dishes like biryani, it enhances taste and texture. A pantry staple, Vanaspati Oil suits festive and everyday recipes, offering versatility for home cooks. Enjoy its ability to mimic ghee’s richness in cooking or baking, delivering authentic Indian flavor with reliable performance in every dish."
    },
];

function Oil() {
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
                                Oil
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Product Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
                    Pure oils, Global trust
                </h2>

                <div className="row">
                    {oilVarieties.map((item) => (
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
                                <Link to={`/oil/${encodeURIComponent(item.name)}`}>
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
                                            to={`/oil/${encodeURIComponent(item.name)}`}
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

export default Oil;
export { oilVarieties };
