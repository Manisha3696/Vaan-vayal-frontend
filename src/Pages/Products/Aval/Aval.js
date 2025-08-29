import React from 'react';
import { Link } from 'react-router-dom';
import Aval1 from '../../../images/Aval/Arisi-Nice-Aval-Vaan-Vayal.jpg'
import Aval2 from '../../../images/Aval/Black-Aval-Vaan-Vayal.jpg'
import Aval3 from '../../../images/Aval/Red-Arisi-Aval-Ketti-Vaan-Vayal.jpg'
import Aval4 from '../../../images/Aval/Red-Arisi-Aval-Nice-Vaan-Vayal.jpg'
import Aval5 from '../../../images/Aval/Pori-Vaan-Vayal.jpg'
import Aval6 from '../../../images/Aval/Nel-Pori-Vaan-Vayal.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Aval/Aval-Banner-Vaan-Vayal.jpg';
import '../../../Css/Style.css'
const avalVarieties = [
    {
        id: 1,
        name: "Arisi Nice Aval",
        image: Aval1,
        title: "Arisi Nice Aval",
        description: "Arisi Nice Aval, made from finely processed rice, offers a soft, delicate texture perfect for quick and versatile South Indian dishes. Ideal for preparing sweet or savory poha, upma, or snacks, it absorbs flavors beautifully. Sourced from premium rice, this aval cooks quickly, making it a convenient choice for busy mornings or light meals. Its smooth, thin flakes ensure a fluffy texture when soaked, pairing well with spices, vegetables, or jaggery. Perfect for breakfast or festive recipes, Arisi Nice Aval is a pantry staple, delivering authentic taste and ease of preparation. Enjoy its light, wholesome quality in traditional dishes or creative culinary experiments."
    },
    {
        id: 2,
        name: "Ketti Arisi Aval",
        image: Aval2,
        title: "Ketti Arisi Aval",
        description: "Ketti Arisi Aval, crafted from thick rice flakes, delivers a hearty texture and subtle flavor, ideal for robust South Indian dishes. Perfect for savory poha, upma, or snacks, its thicker flakes hold up well with bold spices and ingredients. Sourced from high-quality rice, this aval is easy to prepare, requiring minimal soaking for a satisfying bite. Great for breakfast or quick meals, it pairs wonderfully with onions, peanuts, or curries. A versatile pantry essential, Ketti Arisi Aval brings authentic taste to both traditional and modern recipes, offering a wholesome, filling option for busy days or festive occasions with its distinct texture and reliable quality."
    },
    {
        id: 3,
        name: "Red Rice Ketti Aval",
        image: Aval3,
        title: "Red Rice Ketti Aval",
        description: "Red Rice Ketti Aval, made from nutritious red rice, offers a nutty flavor and chewy texture, packed with fiber for a wholesome meal. Ideal for health-conscious diets, it’s perfect for savory poha, upma, or salads. Sourced from premium red rice, these thick flakes retain their natural bran, enhancing nutrition. Easy to prepare with minimal soaking, it pairs well with vegetables, spices, or coconut. Its earthy taste and robust texture make it a great choice for traditional South Indian dishes or modern grain bowls. Red Rice Ketti Aval brings a healthy, flavorful twist to your pantry, delivering authentic taste and satisfying bite for breakfast or snacks."
    },
    {
        id: 4,
        name: "Red Rice Nice Aval",
        image: Aval4,
        title: "Red Rice Nice Aval",
        description: "Red Rice Nice Aval, crafted from fine red rice flakes, combines a nutty flavor with a delicate, fluffy texture for healthy South Indian dishes. Perfect for light poha, upma, or sweet recipes, it absorbs flavors effortlessly. Sourced from nutrient-rich red rice, these thin flakes are quick to prepare, ideal for busy mornings or snacks. Packed with fiber and antioxidants, it pairs well with jaggery, coconut, or savory spices. A versatile pantry staple, Red Rice Nice Aval suits both traditional and modern recipes, offering a wholesome, flavorful option. Enjoy its authentic taste and health benefits in breakfast dishes or creative meals with ease and consistency."
    },
    {
        id: 5,
        name: "Pori",
        image: Aval5,
        title: "Pori",
        description: "Pori, or puffed rice, is a light, crispy staple perfect for South Indian snacks and festive treats. Ideal for making pori urundai, bhel puri, or savory mixes, its airy texture adds crunch to any dish. Sourced from premium rice, this pori is ready to use, requiring no cooking, making it a convenient choice for quick snacks or desserts. Its mild flavor pairs well with jaggery, spices, or peanuts, offering versatility for sweet or savory recipes. A pantry essential, Pori brings traditional taste to celebrations or casual munching, delivering a satisfying crunch and authentic South Indian flair with every bite, perfect for all ages."
    },
    {
        id: 6,
        name: "Nel Pori",
        image: Aval6,
        title: "Nel Pori",
        description: "Nel Pori, premium puffed rice from paddy, offers a light, crunchy texture ideal for South Indian festive sweets and snacks. Perfect for pori urundai or savory mixes, its airy grains enhance both traditional and modern recipes. Sourced from high-quality rice, this pori requires no preparation, making it a convenient choice for quick treats. Its subtle flavor pairs beautifully with jaggery, cardamom, or roasted nuts, adding a delightful crunch. A must-have for celebrations or casual snacking, Nel Pori brings authentic South Indian taste to your pantry. Enjoy its versatility and crisp texture in desserts or savory dishes, delivering wholesome, traditional flavor with every bite."
    },
];

function AvalList() {
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
                                Aval and Pori
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Product Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
                    Wholesome aval, Trusted worldwide
                </h2>

                <div className="row">
                    {avalVarieties.map((item) => (
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
                                <Link to={`/aval-pori/${encodeURIComponent(item.name)}`}>
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
                                            to={`/aval-pori/${encodeURIComponent(item.name)}`}
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

export default AvalList;
export { avalVarieties };
