import React from 'react';
import { Link } from 'react-router-dom';
import Spices1 from '../../../images/Spices/turmeric-expoters-vaan-vayal.jpg';
import Spices2 from '../../../images/Spices/fenugreek-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices3 from '../../../images/Spices/fennel-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices4 from '../../../images/Spices/cumin-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices5 from '../../../images/Spices/cumin-powdwe-expoters-vaan-vayal-enterprises.jpg';
import Spices6 from '../../../images/Spices/caraway-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices7 from '../../../images/Spices/ajwain-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices8 from '../../../images/Spices/anise-expoters-vaan-vayal-enterprises.jpg';
import Spices9 from '../../../images/Spices/fenugreek-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices10 from '../../../images/Spices/coriander-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices11 from '../../../images/Spices/coriander-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices12 from '../../../images/Spices/black-pepper-expoters-vaan-vayal-enterprises.jpg';
import Spices13 from '../../../images/Spices/black-pepper-crushed-expoters-vaan-vayal-enterprises.jpg';
import Spices14 from '../../../images/Spices/poppy-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices15 from '../../../images/Spices/sesam-seeds-expoters-vaan-vayal-enterprises.jpg';
import Spices16 from '../../../images/Spices/green-cardamom-expoters-vaan-vayal-enterprises.jpg';
import Spices17 from '../../../images/Spices/cinnamom-quills-expoters-vaan-vayal-enterprises.jpg';
import Spices18 from '../../../images/Spices/cinnamom-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices19 from '../../../images/Spices/cloves-expoters-vaan-vayal-enterprises.jpg';
import Spices20 from '../../../images/Spices/nutmeg-expoters-vaan-vayal-enterprises.jpg';
import Spices21 from '../../../images/Spices/saffron-expoters-vaan-vayal-enterprises.jpg';
import Spices22 from '../../../images/Spices/dried-red-chilli-expoters-vaan-vayal-enterprises.jpg';
import Spices23 from '../../../images/Spices/crushed-red-chilli-expoters-vaan-vayal-enterprises.jpg';
import Spices24 from '../../../images/Spices/red-chilli-powder-expoters-vaan-vayal-enterprises.jpg';
import Spices25 from '../../../images/Spices/paprika-expoters-vaan-vayal-enterprises.jpg';
import Spices26 from '../../../images/Spices/asafoetida-powder-expoters-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Spices/Spices-banner-expoters-vaan-vayal-enterprises.jpg';

const SpicesVarieties = [
    {
        id: 1,
        name: "Turmeric Powder",
        image: Spices1,
        title: "Turmeric Powder",
        description: "Turmeric Powder, ground from premium turmeric roots, adds a vibrant yellow hue and earthy flavor to dishes. Perfect for curries, rice, or wellness drinks, its anti-inflammatory properties enhance health. Sourced from quality farms, this powder ensures consistent color and potency. Ideal for Indian and global cuisines, it pairs well with lentils, vegetables, or soups. A pantry staple, Turmeric Powder elevates both savory and sweet recipes with its warm, peppery notes. Use it for cooking or as a natural remedy in teas. Its rich flavor and health benefits make it a must-have for daily meals, delivering authentic taste and quality in every pinch."
    },
    {
        id: 2,
        name: "Fennel Seeds",
        image: Spices2,
        title: "Fennel Seeds",
        description: "Fennel Seeds, sourced from premium plants, offer a sweet, licorice-like flavor for Indian and global dishes. Perfect for tempering curries, breads, or as a digestive aid, they add a refreshing aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for spice blends, desserts, or teas, they pair well with vegetables or meats. A pantry essential, Fennel Seeds enhance both savory and sweet recipes with their unique flavor. Use them whole or roasted for maximum impact. Their aromatic profile and digestive benefits make them a must-have for daily cooking, delivering authentic taste and quality in every dish."
    },
    {
        id: 3,
        name: "Fennel Powder",
        image: Spices3,
        title: "Fennel Powder",
        description: "Fennel Powder, finely ground from premium fennel seeds, delivers a sweet, aromatic flavor for easy seasoning. Perfect for curries, soups, or spice blends, it enhances dishes with a licorice-like note. Sourced from quality farms, this powder ensures consistent taste and freshness. Ideal for Indian and Mediterranean cuisines, it pairs well with vegetables, fish, or desserts. A pantry staple, Fennel Powder simplifies cooking with its versatile, digestive-friendly profile. Use it in marinades or as a tea base for a soothing effect. Its rich aroma and quality make it a must-have for daily meals, delivering authentic flavor and health benefits in every pinch."
    },
    {
        id: 4,
        name: "Cumin Seeds",
        image: Spices4,
        title: "Cumin Seeds",
        description: "Cumin Seeds, sourced from premium plants, offer a warm, earthy flavor essential for Indian and global cuisines. Perfect for tempering curries, rice, or roasting for snacks, they add a nutty aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for spice blends, tacos, or chutneys, they pair well with vegetables or meats. A pantry staple, Cumin Seeds elevate savory dishes with their bold flavor. Use them whole or toasted for maximum impact. Their aromatic profile and digestive benefits make them a must-have for daily cooking, delivering authentic taste and quality in every dish."
    },
    {
        id: 5,
        name: "Cumin Powder",
        image: Spices5,
        title: "Cumin Powder",
        description: "Cumin Powder, ground from premium cumin seeds, delivers a warm, earthy flavor for easy seasoning in dishes. Perfect for curries, soups, or marinades, it enhances Indian and global cuisines. Sourced from quality farms, this powder ensures consistent taste and potency. Ideal for spice blends, stews, or grilled meats, it pairs well with vegetables or lentils. A pantry essential, Cumin Powder simplifies cooking with its versatile, digestive-friendly profile. Use it in rubs or sauces for a bold flavor boost. Its rich aroma and quality make it a must-have for daily meals, delivering authentic taste and health benefits in every pinch for both novice and expert cooks."
    },
    {
        id: 6,
        name: "Caraway Seeds",
        image: Spices6,
        title: "Caraway Seeds",
        description: "Caraway Seeds, sourced from premium plants, offer a warm, slightly sweet flavor with a hint of anise. Perfect for breads, curries, or European dishes, they add a distinctive aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for roasting, spice blends, or pickling, they pair well with cabbage, meats, or cheeses. A pantry staple, Caraway Seeds elevate both savory and sweet recipes with their unique profile. Use them whole or toasted for maximum flavor. Their aromatic quality and digestive benefits make them a must-have for global cuisines, delivering authentic taste and quality in every dish."
    },
    {
        id: 7,
        name: "Ajwain Seeds",
        image: Spices7,
        title: "Ajwain Seeds",
        description: "Ajwain Seeds, sourced from premium plants, deliver a pungent, thyme-like flavor essential for Indian cuisine. Perfect for tempering curries, breads, or snacks, they aid digestion with their bold aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for parathas, chutneys, or spice blends, they pair well with potatoes or lentils. A pantry staple, Ajwain Seeds enhance savory dishes with their unique flavor. Use them whole or roasted for maximum impact. Their aromatic profile and health benefits make them a must-have for daily cooking, delivering authentic Indian taste and quality in every dish for both traditional and modern recipes."
    },
    {
        id: 8,
        name: "Anise Seeds",
        image: Spices8,
        title: "Anise Seeds",
        description: "Anise Seeds, sourced from premium plants, offer a sweet, licorice-like flavor for Indian and global dishes. Perfect for desserts, breads, or spice blends, they add a refreshing aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for sweets, teas, or savory curries, they pair well with fruits or meats. A pantry essential, Anise Seeds enhance both sweet and savory recipes with their unique profile. Use them whole or ground for maximum flavor. Their aromatic quality and digestive benefits make them a must-have for versatile cooking, delivering authentic taste and quality in every dish for traditional and modern cuisines."
    },
    {
        id: 9,
        name: "Fenugreek Seeds",
        image: Spices9,
        title: "Fenugreek Seeds",
        description: "Fenugreek Seeds, sourced from premium plants, offer a bitter-sweet, nutty flavor essential for Indian cuisine. Perfect for tempering curries, dals, or pickling, they aid digestion with their bold aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for spice blends, breads, or teas, they pair well with vegetables or lentils. A pantry staple, Fenugreek Seeds enhance savory dishes with their unique profile. Use them whole or roasted for maximum flavor. Their health benefits and aromatic quality make them a must-have for daily cooking, delivering authentic Indian taste and quality in every dish for traditional and modern recipes."
    },
    {
        id: 10,
        name: "Coriander Seeds",
        image: Spices10,
        title: "Coriander Seeds",
        description: "Coriander Seeds, sourced from premium plants, deliver a citrusy, warm flavor essential for Indian and global cuisines. Perfect for tempering curries, pickling, or roasting, they add a fresh aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for spice blends, chutneys, or marinades, they pair well with vegetables or meats. A pantry staple, Coriander Seeds enhance savory and sweet dishes with their versatile profile. Use them whole or toasted for maximum flavor. Their aromatic quality and digestive benefits make them a must-have for daily cooking, delivering authentic taste and quality in every dish for all culinary styles."
    },
    {
        id: 11,
        name: "Coriander Powder",
        image: Spices11,
        title: "Coriander Powder",
        description: "Coriander Powder, ground from premium coriander seeds, offers a citrusy, warm flavor for easy seasoning. Perfect for curries, gravies, or spice blends, it enhances Indian and global dishes. Sourced from quality farms, this powder ensures consistent taste and freshness. Ideal for soups, marinades, or roasted vegetables, it pairs well with lentils or meats. A pantry essential, Coriander Powder simplifies cooking with its versatile, digestive-friendly profile. Use it in rubs or sauces for a flavor boost. Its aromatic quality and health benefits make it a must-have for daily meals, delivering authentic taste and quality in every pinch for both novice and expert cooks."
    },
    {
        id: 12,
        name: "Black Pepper Whole",
        image: Spices12,
        title: "Black Pepper Whole",
        description: "Black Pepper Whole, sourced from premium peppercorns, delivers a bold, spicy kick essential for global cuisines. Perfect for grinding fresh into curries, soups, or marinades, it adds a warm aroma. Sourced from quality farms, these peppercorns ensure consistent flavor and freshness. Ideal for seasoning meats, vegetables, or sauces, they enhance both savory and sweet dishes. A pantry staple, Black Pepper Whole elevates recipes with its versatile profile. Use it whole or freshly ground for maximum impact. Its pungent flavor and health benefits make it a must-have for daily cooking, delivering authentic taste and quality in every dish for all culinary styles."
    },
    {
        id: 13,
        name: "Black Pepper Crushed",
        image: Spices13,
        title: "Black Pepper Crushed",
        description: "Black Pepper Crushed, sourced from premium peppercorns, offers a bold, spicy flavor for easy seasoning. Perfect for curries, steaks, or salads, it adds a warm, pungent kick to dishes. Sourced from quality farms, this crushed pepper ensures consistent taste and freshness. Ideal for marinades, soups, or spice rubs, it pairs well with meats or vegetables. A pantry essential, Black Pepper Crushed simplifies cooking with its versatile, health-friendly profile. Use it for a quick flavor boost in savory recipes. Its aromatic quality and digestive benefits make it a must-have for daily meals, delivering authentic taste and quality in every sprinkle for all culinary styles."
    },
    {
        id: 14,
        name: "Poppy Seeds",
        image: Spices14,
        title: "Poppy Seeds",
        description: "Poppy Seeds, sourced from premium plants, offer a nutty, mild flavor for Indian and global cuisines. Perfect for breads, curries, or desserts, they add a subtle crunch and aroma. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for thickening gravies, baking, or garnishing, they pair well with potatoes or sweets. A pantry staple, Poppy Seeds enhance both savory and sweet recipes with their unique profile. Use them whole or ground for maximum flavor. Their delicate taste and nutritional value make them a must-have for versatile cooking, delivering authentic quality in every dish for traditional and modern recipes."
    },
    {
        id: 15,
        name: "Sesame Seeds",
        image: Spices15,
        title: "Sesame Seeds",
        description: "Sesame Seeds, sourced from premium plants, deliver a nutty, rich flavor for Indian and global dishes. Perfect for tempering curries, breads, or sweets, they add a crunchy texture. Sourced from quality farms, these seeds ensure consistent taste and freshness. Ideal for stir-fries, tahini, or snacks, they pair well with vegetables or desserts. A pantry staple, Sesame Seeds enhance recipes with their calcium-rich profile. Use them whole or toasted for maximum flavor. Their aromatic quality and health benefits make them a must-have for daily cooking, delivering authentic taste and quality in every dish for both traditional and modern culinary creations."
    },
    {
        id: 16,
        name: "Green Cardamom",
        image: Spices16,
        title: "Green Cardamom",
        description: "Green Cardamom, sourced from premium pods, offers a sweet, aromatic flavor essential for Indian and global cuisines. Perfect for biryanis, desserts, or teas, it adds a refreshing aroma. Sourced from quality farms, these pods ensure consistent taste and freshness. Ideal for spice blends, curries, or sweets, they pair well with rice or fruits. A pantry staple, Green Cardamom elevates both savory and sweet dishes with its versatile profile. Use it whole or ground for maximum flavor. Its fragrant quality and digestive benefits make it a must-have for daily cooking, delivering authentic taste and quality in every dish for all culinary styles."
    },
    {
        id: 17,
        name: "Cinnamon Quills",
        image: Spices17,
        title: "Cinnamon Quills",
        description: "Cinnamon Quills, sourced from premium bark, deliver a warm, sweet flavor for Indian and global dishes. Perfect for curries, desserts, or teas, they add a rich aroma and depth. Sourced from quality farms, these quills ensure consistent taste and freshness. Ideal for spice blends, baking, or mulled drinks, they pair well with fruits or meats. A pantry staple, Cinnamon Quills enhance both sweet and savory recipes with their versatile profile. Use them whole or broken for maximum flavor. Their aromatic quality and health benefits make them a must-have for daily cooking, delivering authentic taste and quality in every dish."
    },
    {
        id: 18,
        name: "Cinnamon Powder",
        image: Spices18,
        title: "Cinnamon Powder",
        description: "Cinnamon Powder, ground from premium bark, offers a warm, sweet flavor for easy seasoning in dishes. Perfect for baking, curries, or beverages, it enhances Indian and global cuisines. Sourced from quality farms, this powder ensures consistent taste and potency. Ideal for desserts, spice rubs, or teas, it pairs well with fruits or meats. A pantry essential, Cinnamon Powder simplifies cooking with its versatile, health-friendly profile. Use it in smoothies or sauces for a flavor boost. Its aromatic quality and benefits make it a must-have for daily meals, delivering authentic taste and quality in every pinch for both novice and expert cooks."
    },
    {
        id: 19,
        name: "Cloves",
        image: Spices19,
        title: "Cloves",
        description: "Cloves, sourced from premium buds, deliver a warm, pungent flavor essential for Indian and global cuisines. Perfect for curries, rice, or desserts, they add a rich, aromatic depth. Sourced from quality farms, these cloves ensure consistent taste and freshness. Ideal for spice blends, teas, or marinades, they pair well with meats or sweets. A pantry staple, Cloves enhance both savory and sweet recipes with their bold profile. Use them whole or ground for maximum flavor. Their aromatic quality and health benefits make them a must-have for daily cooking, delivering authentic taste and quality in every dish for traditional and modern recipes."
    },
    {
        id: 20,
        name: "Nutmeg",
        image: Spices20,
        title: "Nutmeg",
        description: "Nutmeg, sourced from premium seeds, offers a warm, sweet flavor for Indian and global dishes. Perfect for desserts, curries, or beverages, it adds a rich, aromatic depth. Sourced from quality farms, this nutmeg ensures consistent taste and freshness. Ideal for baking, spice blends, or creamy sauces, it pairs well with vegetables or sweets. A pantry staple, Nutmeg enhances both savory and sweet recipes with its versatile profile. Use it grated or ground for maximum flavor. Its aromatic quality and health benefits make it a must-have for daily cooking, delivering authentic taste and quality in every dish for traditional and modern culinary creations."
    },
    {
        id: 21,
        name: "Saffron",
        image: Spices21,
        title: "Saffron",
        description: "Saffron, sourced from premium stigmas, delivers a luxurious, floral flavor and vibrant color to dishes. Perfect for biryanis, desserts, or teas, it elevates Indian and global cuisines. Sourced from quality farms, this saffron ensures consistent potency and aroma. Ideal for special occasions, risottos, or sweets, it pairs well with rice or milk. A pantry essential, Saffron adds elegance to recipes with its unique profile. Use it sparingly for maximum flavor and color. Its exquisite taste and health benefits make it a must-have for gourmet cooking, delivering authentic quality in every strand for both traditional and modern dishes."
    },
    {
        id: 22,
        name: "Dried Red Chilli",
        image: Spices22,
        title: "Dried Red Chilli",
        description: "Dried Red Chilli, sourced from premium peppers, delivers a fiery, bold flavor essential for Indian and global cuisines. Perfect for tempering curries, chutneys, or marinades, it adds vibrant heat. Sourced from quality farms, these chilies ensure consistent spice and freshness. Ideal for spice blends, stir-fries, or pickles, they pair well with vegetables or meats. A pantry staple, Dried Red Chilli enhances savory dishes with its intense profile. Use it whole or broken for maximum flavor. Its spicy kick and quality make it a must-have for daily cooking, delivering authentic taste and heat in every dish for traditional and modern recipes."
    },
    {
        id: 23,
        name: "Crushed Red Chilli",
        image: Spices23,
        title: "Crushed Red Chilli",
        description: "Crushed Red Chilli, sourced from premium peppers, offers a fiery, textured heat for easy seasoning. Perfect for curries, pizzas, or marinades, it adds bold flavor to Indian and global dishes. Sourced from quality farms, this crushed chilli ensures consistent spice and freshness. Ideal for stir-fries, sauces, or garnishes, it pairs well with vegetables or meats. A pantry essential, Crushed Red Chilli simplifies cooking with its versatile, spicy profile. Use it for a quick heat boost in recipes. Its vibrant flavor and quality make it a must-have for daily meals, delivering authentic taste and intensity in every sprinkle for all culinary styles."
    },
    {
        id: 24,
        name: "Red Chilli Powder",
        image: Spices24,
        title: "Red Chilli Powder",
        description: "Red Chilli Powder, ground from premium dried chilies, delivers a fiery, vibrant flavor for Indian and global cuisines. Perfect for curries, marinades, or spice blends, it adds bold heat and color. Sourced from quality farms, this powder ensures consistent potency and freshness. Ideal for gravies, stir-fries, or snacks, it pairs well with vegetables or meats. A pantry staple, Red Chilli Powder simplifies cooking with its versatile, spicy profile. Use it for a quick flavor boost in savory dishes. Its intense heat and quality make it a must-have for daily meals, delivering authentic taste in every pinch for both traditional and modern recipes."
    },
    {
        id: 25,
        name: "Paprika",
        image: Spices25,
        title: "Paprika",
        description: "Paprika, ground from premium sweet peppers, offers a mild, smoky flavor and vibrant color for global cuisines. Perfect for curries, stews, or garnishes, it enhances dishes without overpowering heat. Sourced from quality farms, this paprika ensures consistent taste and freshness. Ideal for marinades, soups, or roasted vegetables, it pairs well with meats or potatoes. A pantry staple, Paprika adds a versatile, colorful profile to recipes. Use it for seasoning or as a visual accent in dishes. Its mild flavor and quality make it a must-have for daily cooking, delivering authentic taste and vibrancy in every pinch for both traditional and modern culinary creations."
    },
    {
        id: 26,
        name: "Asafoetida Powder",
        image: Spices26,
        title: "Asafoetida Powder",
        description: "Asafoetida Powder, sourced from premium resin, delivers a pungent, savory flavor essential for Indian cuisine. Perfect for tempering dals, curries, or pickles, it aids digestion with its bold aroma. Sourced from quality sources, this powder ensures consistent taste and potency. Ideal for vegetarian dishes or spice blends, it pairs well with lentils or vegetables. A pantry staple, Asafoetida Powder enhances savory recipes with its unique profile. Use it sparingly for maximum flavor. Its aromatic quality and health benefits make it a must-have for daily cooking, delivering authentic Indian taste and quality in every pinch for traditional and modern recipes."
    },
];

function Spices() {
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
                                Spices
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
                    {SpicesVarieties.map((item) => (
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
                                <Link to={`/Spices/${encodeURIComponent(item.name)}`}>
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
                                            to={`/Spices/${encodeURIComponent(item.name)}`}
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

export default Spices;
export { SpicesVarieties };
