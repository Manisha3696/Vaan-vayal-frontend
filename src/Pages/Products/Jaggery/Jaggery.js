import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Jaggery/Banner.jpg';
import '../../../Css/Style.css'
import jaggery1 from '../../../images/Jaggery/Jaggery-Cube-Vaan-Vayal.jpg'
import jaggery2 from '../../../images/Jaggery/Jaggery-Ovel-Vaan-Vayal.jpg'
import jaggery3 from '../../../images/Jaggery/Jaggery-Powder-Dark-Vaan-Vayal.jpg'
import jaggery4 from '../../../images/Jaggery/Jaggery-Powder-Light-Vaan-Vayal.jpg'
import jaggery5 from '../../../images/Jaggery/Karupatti-Vaan-Vayal.jpg'

const jaggeryVarieties = [
    {
        id: 1,
        name: "Jaggery Cube",
        image: jaggery1,
        title: "Jaggery Cube",
        description: "Jaggery Cube, crafted from pure sugarcane juice, offers a rich, caramel-like sweetness in convenient, portion-sized cubes. Perfect for sweetening teas, desserts, or traditional Indian sweets like laddoos, it dissolves easily for versatile use. Sourced from premium sugarcane, these cubes provide natural sweetness with trace minerals. Ideal for daily cooking or festive recipes, they enhance flavors in curries, chutneys, or snacks. A healthier alternative to refined sugar, Jaggery Cube adds authentic taste to your dishes. Easy to store and use, it’s a pantry staple for creating wholesome, traditional treats or modern desserts, delivering natural sweetness and rich flavor every time."
    },
    {
        id: 2,
        name: "Jaggery Oval",
        image: jaggery2,
        title: "Jaggery Oval",
        description: "Jaggery Oval, made from concentrated sugarcane juice, delivers a deep, molasses-like sweetness in a unique, easy-to-use oval shape. Ideal for sweetening beverages, porridges, or traditional sweets like payasam, it blends seamlessly into recipes. Sourced from high-quality sugarcane, these ovals retain natural minerals and a robust flavor. Perfect for festive dishes or everyday cooking, they pair well with spices or nuts in desserts and snacks. A natural sugar alternative, Jaggery Oval enhances both taste and nutrition. Convenient for storage and portioning, it’s a pantry essential for authentic Indian cuisine, offering rich, wholesome sweetness in every dish or drink."
    },
    {
        id: 3,
        name: "Jaggery Powder Dark",
        image: jaggery3,
        title: "Jaggery Powder Dark",
        description: "Jaggery Powder Dark, finely ground from rich sugarcane juice, offers a bold, caramelized sweetness with a deep, earthy flavor. Perfect for baking, sweetening drinks, or making traditional sweets like halwa, it dissolves quickly for easy use. Sourced from premium sugarcane, this dark powder retains natural minerals, making it a healthier sugar alternative. Ideal for festive recipes or daily cooking, it enhances curries, chutneys, or desserts with its robust taste. A versatile pantry staple, Jaggery Powder Dark suits both sweet and savory dishes, delivering authentic Indian flavor. Enjoy its rich, wholesome sweetness in modern or traditional recipes with consistent quality and ease."
    },
    {
        id: 4,
        name: "Jaggery Powder Light",
        image: jaggery4,
        title: "Jaggery Powder Light",
        description: "Jaggery Powder Light, made from pure sugarcane juice, provides a mild, golden sweetness with a smooth, versatile texture. Perfect for sweetening teas, smoothies, or desserts like kheer, it blends effortlessly into any recipe. Sourced from high-quality sugarcane, this light powder retains natural nutrients for a healthier sugar substitute. Ideal for everyday cooking or festive treats, it enhances flavors in sweets, snacks, or even savory dishes. A pantry essential, Jaggery Powder Light offers authentic taste with easy storage and use. Enjoy its delicate sweetness in traditional Indian recipes or modern creations, delivering wholesome flavor and consistent quality for all your culinary needs."
    },
    {
        id: 5,
        name: "Karupatti",
        image: jaggery5,
        title: "Karupatti",
        description: "Karupatti, traditional palm jaggery, offers a distinct, smoky sweetness crafted from pure palm sap. Perfect for South Indian sweets like pongal or karupatti coffee, its rich flavor elevates both traditional and modern dishes. Sourced from premium palm trees, this jaggery is packed with minerals, making it a wholesome sugar alternative. Ideal for festive recipes or daily use, it pairs well with coconut, spices, or nuts in desserts and snacks. Easy to grate or melt, Karupatti adds authentic South Indian taste to your pantry. Enjoy its deep, natural sweetness in beverages or cooking, delivering unique flavor and health benefits with every delicious use."
    },
];

function JaggeryList() {
    return (
        <div>
            {/* Banner Section */}
            <div
                className="position-relative text-white text-start"
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
                                Jaggery
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Product Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
                    Natural sweetness, Global quality
                </h2>

                <div className="row">
                    {jaggeryVarieties.map((item) => (
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
                                <Link to={`/jaggery/${encodeURIComponent(item.name)}`}>
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
                                            to={`/jaggery/${encodeURIComponent(item.name)}`}
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

export default JaggeryList;
export { jaggeryVarieties };
