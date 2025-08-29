import React from 'react';
import { Link } from 'react-router-dom';
import paste1 from '../../../images/Rice paste/vathal-paste-exporter-vaan-vayal-enterprises.jpg';
import paste2 from '../../../images/Rice paste/kara-kolambu-paste-vaan-vayal.jpg';
import paste3 from '../../../images/Rice paste/milagu-kulambu-paste-vaan-vayal.jpg';
import paste4 from '../../../images/Rice paste/mint-rice-paste-vaan-vayal.jpg';
import paste5 from '../../../images/Rice paste/gongura-rice-paste-vaanvayal.jpg';
import paste6 from '../../../images/Rice paste/curry-leaf-paste-vaan-vayal.jpg';
import paste7 from '../../../images/Rice paste/tomato-paste-vaan-vayal.jpg';
import paste8 from '../../../images/Rice paste/pepper-paste-vaan-vayal.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Rice paste/Rice-Paste-Banner-Vaan-Vayal.jpg';
import '../../../Css/Style.css'

const ricePasteVarieties = [
    {
        id: 1,
        name: "Vathal Kolambu Paste",
        image: paste1,
        title: "Vathal Kolambu Paste",
        description: "Vathal Kolambu Paste, a tangy South Indian blend, simplifies authentic tamarind-based curry preparation with dried vegetables. Perfect for quick rice dishes or side gravies, its bold, spicy flavor enhances meals. Made from premium spices and tamarind, it ensures rich taste and consistency. Ideal for busy kitchens or festive menus, it pairs well with steamed rice or dosas. A pantry essential, this paste delivers traditional South Indian zest with minimal effort. Enjoy its vibrant, tangy profile in curries or as a flavor base for veggies. Sourced for quality, Vathal Kolambu Paste brings authentic taste and convenience to every meal, perfect for home cooks."
    },
    {
        id: 2,
        name: "Kara Kolambu Paste",
        image: paste2,
        title: "Kara Kolambu Paste",
        description: "Kara Kolambu Paste, a fiery South Indian mix, delivers a spicy, tangy flavor for authentic kara kulambu curry. Perfect for rice or as a side, its bold blend of tamarind and spices simplifies cooking. Sourced from premium ingredients, this paste ensures consistent taste and aroma. Ideal for daily meals or festive spreads, it pairs well with vegetables or meat. A pantry staple, Kara Kolambu Paste brings South Indian tradition to your kitchen with ease. Enjoy its zesty, robust profile in curries or gravies, adding depth to every dish. Its quality and convenience make it a must-have for home cooks seeking authentic, spicy flavors."
    },
    {
        id: 3,
        name: "Milagu Kolambu Paste",
        image: paste3,
        title: "Milagu Kolambu Paste",
        description: "Milagu Kolambu Paste, a peppery South Indian blend, offers a warm, spicy kick for authentic milagu kulambu. Perfect for rice or as a health-focused side, its black pepper and tamarind base aids digestion. Sourced from premium spices, this paste ensures rich flavor and consistent quality. Ideal for daily meals or winter menus, it pairs well with steamed rice or lentils. A pantry essential, Milagu Kolambu Paste simplifies traditional cooking with bold taste. Enjoy its fiery, aromatic profile in curries or gravies, enhancing every dish. Its quality and convenience make it a must-have for home cooks craving South Indian authenticity and wellness."
    },
    {
        id: 4,
        name: "Pudhina Rice Paste",
        image: paste4,
        title: "Pudhina Rice Paste",
        description: "Pudhina Rice Paste, a refreshing South Indian mix, infuses minty freshness into flavorful rice dishes. Perfect for quick pulao or biryani, its vibrant blend of mint and spices elevates meals. Sourced from premium ingredients, this paste ensures consistent aroma and taste. Ideal for everyday cooking or festive menus, it pairs well with vegetables or curd. A pantry staple, Pudhina Rice Paste brings South Indian flair with minimal effort. Enjoy its cool, herbaceous profile in rice dishes or as a marinade, adding zest to every bite. Its quality and convenience make it a must-have for home cooks seeking authentic, refreshing flavors in their culinary creations."
    },
    {
        id: 5,
        name: "Gongura Leaf Rice Paste",
        image: paste5,
        title: "Gongura Leaf Rice Paste",
        description: "Gongura Leaf Rice Paste, a tangy South Indian blend, brings the unique, tart flavor of gongura leaves to rice dishes. Perfect for quick pulao or as a side, its bold taste elevates meals with authenticity. Sourced from fresh gongura and premium spices, this paste ensures vibrant flavor and consistency. Ideal for daily cooking or festive spreads, it pairs well with rice or flatbreads. A pantry essential, Gongura Leaf Rice Paste simplifies traditional recipes with ease. Enjoy its zesty, earthy profile in rice mixes or curries, adding depth to every dish. Its quality and convenience make it a must-have for home cooks craving South Indian heritage."
    },
    {
        id: 6,
        name: "Curry Leaf Rice Paste",
        image: paste6,
        title: "Curry Leaf Rice Paste",
        description: "Curry Leaf Rice Paste, a fragrant South Indian blend, infuses the earthy aroma of curry leaves into rice dishes. Perfect for quick pulao or variety rice, its bold flavor enhances everyday meals. Sourced from fresh curry leaves and premium spices, this paste ensures consistent taste and aroma. Ideal for daily cooking or festive menus, it pairs well with vegetables or lentils. A pantry staple, Curry Leaf Rice Paste simplifies authentic recipes with ease. Enjoy its aromatic, savory profile in rice dishes or as a seasoning, adding depth to every bite. Its quality and convenience make it a must-have for home cooks seeking traditional South Indian flavors."
    },
    {
        id: 7,
        name: "Tomato Rice Paste",
        image: paste7,
        title: "Tomato Rice Paste",
        description: "Tomato Rice Paste, a vibrant South Indian blend, delivers a tangy, spicy flavor for quick tomato rice or pulao. Perfect for busy kitchens, its rich tomato and spice mix elevates meals with ease. Sourced from premium ingredients, this paste ensures consistent taste and vivid color. Ideal for daily meals or lunchbox recipes, it pairs well with vegetables or curd. A pantry essential, Tomato Rice Paste simplifies authentic cooking with bold flavor. Enjoy its zesty, savory profile in rice dishes or as a base for gravies, adding richness to every bite. Its quality and convenience make it a must-have for home cooks craving South Indian taste."
    },
    {
        id: 8,
        name: "Pepper Rice Paste",
        image: paste8,
        title: "Pepper Rice Paste",
        description: "Pepper Rice Paste, a spicy South Indian blend, brings a fiery, peppery kick to rice dishes or variety rice. Perfect for quick pulao or health-focused meals, its bold flavor aids digestion. Sourced from premium black pepper and spices, this paste ensures rich taste and consistency. Ideal for daily cooking or winter menus, it pairs well with rice or flatbreads. A pantry staple, Pepper Rice Paste simplifies authentic recipes with vibrant flavor. Enjoy its warm, spicy profile in rice mixes or as a seasoning, adding depth to every dish. Its quality and convenience make it a must-have for home cooks seeking South Indian zest and wellness."
    },
];

function RicePaste() {
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
                                Rice Paste
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Product Section */}
            <div className="container py-5">
                <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
                    Authentic taste, Worldwide reach
                </h2>

                <div className="row">
                    {ricePasteVarieties.map((item) => (
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
                                <Link to={`/rice-paste/${encodeURIComponent(item.name)}`}>
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
                                            to={`/rice-paste/${encodeURIComponent(item.name)}`}
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

export default RicePaste;
export { ricePasteVarieties };
