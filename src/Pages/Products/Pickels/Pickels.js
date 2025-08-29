import React from 'react';
import { Link } from 'react-router-dom';
import Pickel1 from '../../../images/Pickle/garlic-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel2 from '../../../images/Pickle/lime-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel3 from '../../../images/Pickle/amla-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel4 from '../../../images/Pickle/mango-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel5 from '../../../images/Pickle/citron-pickel-exporter-vaan-vayal-enterprises.jpg';
import Pickel6 from '../../../images/Pickle/green-chilli-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel7 from '../../../images/Pickle/onion-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel8 from '../../../images/Pickle/tomato-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel9 from '../../../images/Pickle/brinjal-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel10 from '../../../images/Pickle/cury-leaf-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel11 from '../../../images/Pickle/coriander-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel12 from '../../../images/Pickle/ginger-pickle-exporter-vaan-vayal-enterprises.jpg';
import Pickel13 from '../../../images/Pickle/vadu-mangai-pickle-exporter-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Pickle/pickle-banner.jpg';

const PickelVarieties = [
    {
        id: 1,
        name: "Garlic Pickle",
        image: Pickel1,
        title: "Garlic Pickle",
        description: "Garlic Pickle, crafted from fresh garlic cloves, delivers a bold, tangy flavor with a spicy kick, perfect for Indian meals. Infused with premium spices and mustard oil, it enhances rice, rotis, or parathas with its robust taste. Sourced from quality ingredients, this pickle ensures consistent flavor and crunch. Ideal for daily meals or festive spreads, it pairs well with curd rice or dal. A pantry staple, Garlic Pickle adds a zesty punch to snacks or main dishes, offering authentic South Indian taste. Enjoy its rich, aromatic profile as a side or condiment, bringing bold flavor and traditional appeal to every bite with long-lasting freshness."
    },
    {
        id: 2,
        name: "Lime Pickle",
        image: Pickel2,
        title: "Lime Pickle",
        description: "Lime Pickle, made from juicy limes and aromatic spices, offers a tangy, spicy burst that elevates any meal. Perfect for pairing with rice, flatbreads, or curries, its zesty flavor complements both vegetarian and non-vegetarian dishes. Sourced from fresh ingredients, this pickle ensures a balanced taste and tender texture. Ideal for daily dining or festive occasions, it adds a refreshing kick to every bite. A versatile pantry essential, Lime Pickle shines as a condiment or side, delivering authentic Indian flavor. Enjoy its vibrant, citrusy profile in traditional recipes or as a bold accent to modern dishes, providing consistent quality and tangy delight."
    },
    {
        id: 3,
        name: "Amla Pickle",
        image: Pickel3,
        title: "Amla Pickle",
        description: "Amla Pickle, crafted from nutrient-rich Indian gooseberries, offers a tangy, spicy flavor with health benefits. Infused with premium spices, it pairs perfectly with rice, rotis, or dosas, adding a zesty kick to meals. Sourced from fresh amla, this pickle ensures a robust taste and firm texture. Rich in vitamin C, it’s ideal for health-conscious eaters and daily dining or festive menus. A pantry staple, Amla Pickle enhances curries or snacks with its unique, tart profile. Enjoy its authentic South Indian taste as a side or condiment, delivering bold flavor and wellness in every bite. Its vibrant spices and quality make it a must-have for traditional recipes."
    },
    {
        id: 4,
        name: "Mango Pickle",
        image: Pickel4,
        title: "Mango Pickle",
        description: "Mango Pickle, made from raw mangoes and bold spices, delivers a fiery, tangy flavor, a South Indian favorite. Perfect for rice, parathas, or curd-based dishes, its zesty kick elevates every meal. Sourced from premium mangoes, this pickle ensures consistent taste and chunky texture. Ideal for daily meals or festive feasts, it pairs well with dals or grilled meats. A pantry essential, Mango Pickle adds authentic Indian flair as a side or condiment. Enjoy its vibrant, spicy profile in traditional recipes or modern dishes, offering a balance of tartness and heat. Its rich flavor and quality make it a versatile choice for any culinary creation."
    },
    {
        id: 5,
        name: "Citron Pickle",
        image: Pickel5,
        title: "Citron Pickle",
        description: "Citron Pickle, crafted from tangy citron fruit, offers a unique, zesty flavor with a spicy South Indian twist. Perfect for pairing with rice, rotis, or idlis, its bold taste enhances vegetarian and non-vegetarian dishes. Sourced from fresh citrons, this pickle ensures a vibrant flavor and tender texture. Ideal for daily meals or festive spreads, it adds a refreshing kick to every bite. A pantry staple, Citron Pickle shines as a condiment or side, delivering authentic regional taste. Enjoy its citrusy, spicy profile in traditional recipes or as a bold accent to modern dishes, providing consistent quality and a distinctive tang with every spoonful."
    },
    {
        id: 6,
        name: "Green Chilli Pickle",
        image: Pickel6,
        title: "Green Chilli Pickle",
        description: "Green Chilli Pickle, made from fiery green chilies and aromatic spices, delivers a bold, spicy kick for thrill-seekers. Perfect for rice, flatbreads, or snacks, its intense flavor elevates any meal. Sourced from fresh chilies, this pickle ensures a vibrant taste and crisp texture. Ideal for daily dining or festive occasions, it pairs well with curd rice or grilled meats. A pantry essential, Green Chilli Pickle adds authentic Indian heat as a side or condiment. Enjoy its fiery, zesty profile in traditional recipes or modern dishes, offering a perfect balance of spice and flavor. Its quality and intensity make it a must-have for bold palates."
    },
    {
        id: 7,
        name: "Onion Pickle",
        image: Pickel7,
        title: "Onion Pickle",
        description: "Onion Pickle, crafted from fresh onions and bold spices, offers a tangy, mildly sweet flavor with a spicy kick. Perfect for pairing with parathas, rice, or sandwiches, it enhances both Indian and fusion dishes. Sourced from quality onions, this pickle ensures a crunchy texture and consistent taste. Ideal for daily meals or festive spreads, it adds a zesty twist to every bite. A versatile pantry staple, Onion Pickle shines as a condiment or side, delivering authentic regional flavor. Enjoy its balanced, savory profile in traditional recipes or as a bold accent to modern meals, providing vibrant taste and reliable quality with every delicious spoonful."
    },
    {
        id: 8,
        name: "Tomato Pickle",
        image: Pickel8,
        title: "Tomato Pickle",
        description: "Tomato Pickle, made from ripe tomatoes and aromatic spices, delivers a tangy, spicy flavor perfect for South Indian meals. Ideal for rice, dosas, or flatbreads, its rich taste enhances vegetarian and non-vegetarian dishes. Sourced from fresh tomatoes, this pickle ensures a vibrant color and robust flavor. Perfect for daily dining or festive menus, it pairs well with curd rice or lentils. A pantry essential, Tomato Pickle adds authentic Indian zest as a side or spread. Enjoy its bold, savory profile in traditional recipes or modern dishes, offering a balance of tang and spice. Its consistent quality makes it a versatile choice for any culinary creation."
    },
    {
        id: 9,
        name: "Brinjal Pickle",
        image: Pickel9,
        title: "Brinjal Pickle",
        description: "Brinjal Pickle, crafted from tender eggplants and bold spices, offers a rich, tangy flavor with a South Indian twist. Perfect for rice, rotis, or idlis, its savory taste elevates any meal. Sourced from fresh brinjals, this pickle ensures a soft texture and consistent flavor. Ideal for daily meals or festive spreads, it pairs well with dals or curd-based dishes. A pantry staple, Brinjal Pickle adds authentic regional zest as a side or condiment. Enjoy its earthy, spicy profile in traditional recipes or as a bold accent to modern dishes, delivering vibrant taste and quality. Its unique flavor makes it a must-have for pickle lovers."
    },
    {
        id: 10,
        name: "Curry Leaf Pickle",
        image: Pickel10,
        title: "Curry Leaf Pickle",
        description: "Curry Leaf Pickle, made from aromatic curry leaves and spices, delivers a unique, earthy flavor with a spicy kick. Perfect for pairing with rice, dosas, or flatbreads, it enhances South Indian dishes with its bold taste. Sourced from fresh leaves, this pickle ensures a vibrant aroma and consistent quality. Ideal for daily meals or festive menus, it pairs well with curd rice or lentils. A pantry essential, Curry Leaf Pickle adds authentic regional flair as a side or condiment. Enjoy its distinctive, herbaceous profile in traditional recipes or modern dishes, offering a balance of spice and flavor. Its quality makes it a versatile choice for any meal."
    },
    {
        id: 11,
        name: "Coriander Leaf Pickle",
        image: Pickel11,
        title: "Coriander Leaf Pickle",
        description: "Coriander Leaf Pickle, crafted from fresh coriander leaves and spices, offers a vibrant, herbaceous flavor with a tangy, spicy kick. Perfect for rice, rotis, or snacks, it elevates Indian meals with its fresh taste. Sourced from quality ingredients, this pickle ensures a robust flavor and smooth texture. Ideal for daily dining or festive spreads, it pairs well with curd rice or grilled meats. A pantry staple, Coriander Leaf Pickle adds authentic zest as a side or condiment. Enjoy its refreshing, spicy profile in traditional recipes or modern dishes, delivering consistent quality and flavor. Its unique taste makes it a must-have for culinary enthusiasts."
    },
    {
        id: 12,
        name: "Ginger Pickle",
        image: Pickel12,
        title: "Ginger Pickle",
        description: "Ginger Pickle, made from fresh ginger and bold spices, delivers a fiery, tangy flavor perfect for South Indian cuisine. Ideal for pairing with rice, idlis, or parathas, its zesty kick enhances any meal. Sourced from premium ginger, this pickle ensures a crisp texture and consistent taste. Perfect for daily dining or festive occasions, it pairs well with curd rice or spicy curries. A pantry essential, Ginger Pickle adds authentic Indian heat as a side or condiment. Enjoy its bold, spicy profile in traditional recipes or modern dishes, offering a balance of tang and warmth. Its vibrant flavor and quality make it a versatile choice for any palate."
    },
    {
        id: 13,
        name: "Vadu Mangai Pickle",
        image: Pickel13,
        title: "Vadu Mangai Pickle",
        description: "Vadu Mangai Pickle, crafted from tender baby mangoes, offers a tangy, spicy flavor, a South Indian delicacy. Perfect for rice, curd, or dosas, its bold taste elevates traditional meals. Sourced from fresh, young mangoes, this pickle ensures a firm texture and vibrant flavor. Ideal for daily dining or festive spreads, it pairs well with sambar or chutneys. A pantry staple, Vadu Mangai Pickle adds authentic regional zest as a side or condiment. Enjoy its tart, spicy profile in classic recipes or as a bold accent to modern dishes, delivering consistent quality and taste. Its unique flavor makes it a must-have for pickle enthusiasts."
    },
];

function Pickel() {
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
                                Pickle
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Product Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
                    Authentic Taste, Worldwide Trust
                </h2>

                <div className="row">
                    {PickelVarieties.map((item) => (
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
                                <Link to={`/Pickle/${encodeURIComponent(item.name)}`}>
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
                                            to={`/Pickle/${encodeURIComponent(item.name)}`}
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

export default Pickel;
export { PickelVarieties };
