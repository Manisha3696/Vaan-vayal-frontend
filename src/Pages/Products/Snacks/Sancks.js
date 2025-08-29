import React from 'react';
import { Link } from 'react-router-dom';
import Sancks1 from '../../../images/snacks/peanut-chikkles--exporter-vaan-vayal-enterprises.jpg';
import Sancks2 from '../../../images/snacks/peanut-chikki-powder-exporter-vaan-vayal-enterprises.jpg';
import Sancks3 from '../../../images/snacks/sesame-balls-exporter-vaan-vayal-enterprises.jpg';
import Sancks4 from '../../../images/snacks/black-sesame-balls-exporter-vaan-vayal-enterprises.jpg';
import Sancks5 from '../../../images/snacks/peanut-salt-exporter-vaan-vayal-enterprises.jpg';
import Sancks6 from '../../../images/snacks/peanut-chilli-exporter-vaan-vayal-enterprises.jpg';
import Sancks7 from '../../../images/snacks/peanut-pepper-exporter-vaan-vayal-enterprises.jpg';
import Sancks8 from '../../../images/snacks/kamarcut-exporter-vaan-vayal-enterprises.jpg';
import Sancks9 from '../../../images/snacks/hot-mixture-exporter-vaan-vayal-enterprises.jpg';
import Sancks10 from '../../../images/snacks/garlic-mixture-exporter-vaan-vayal-enterprises.jpg';
import Sancks11 from '../../../images/snacks/chana-fry-exporter-vaan-vayal-enterprises.jpg';
import Sancks12 from '../../../images/snacks/kadalai-paruppu-exporter-vaan-vayal-enterprises.jpg';
import Sancks13 from '../../../images/snacks/tabioca-chips-exporter-vaan-vayal-enterprises.jpg';
import Sancks14 from '../../../images/snacks/tapioca-sticks-exporter-vaan-vayal-enterprises.jpg';
import Sancks15 from '../../../images/snacks/thattai-vadai-exporter-vaan-vayal-enterprises.jpg';
import Sancks16 from '../../../images/snacks/banana-chips-exporter-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/snacks/snacks-banner.jpg';

const SnacksVarieties = [
    {
        id: 1,
        name: "Peanut Chikkles",
        image: Sancks1,
        title: "Peanut Chikkles",
        description: "Peanut Chikkles, a traditional Indian sweet, combine crunchy roasted peanuts with caramelized jaggery for a delightful treat. Perfect for snacking or festive gifting, their sweet, nutty flavor satisfies cravings. Sourced from premium peanuts and pure jaggery, these chikkles ensure quality and taste. Ideal for kids and adults, they offer a wholesome, protein-rich bite. Enjoy them as a quick snack or dessert, pairing well with tea or coffee. A pantry staple, Peanut Chikkles bring authentic Indian sweetness to any occasion. Their chewy texture and rich flavor make them a must-have for celebrations or everyday indulgence, delivering tradition and quality in every bite."
    },
    {
        id: 2,
        name: "Peanut Chikki Powder",
        image: Sancks2,
        title: "Peanut Chikki Powder",
        description: "Peanut Chikki Powder, finely ground roasted peanuts and jaggery, offers a sweet, nutty flavor for versatile use. Perfect for sprinkling on desserts, yogurt, or smoothies, it adds a traditional Indian touch. Sourced from premium peanuts and pure jaggery, this powder ensures consistent quality and taste. Ideal for quick snacks or culinary creativity, it suits kids and adults alike. Use it in baking or as a topping for a protein-rich boost. A pantry essential, Peanut Chikki Powder brings authentic sweetness to any dish. Its fine texture and rich flavor make it a must-have for festive treats or everyday indulgence, delivering tradition and convenience."
    },
    {
        id: 3,
        name: "White Sesame Balls",
        image: Sancks3,
        title: "White Sesame Balls",
        description: "White Sesame Balls, a traditional Indian sweet, blend roasted white sesame seeds with jaggery for a nutty, sweet treat. Perfect for festivals or quick snacks, their crunchy texture delights all ages. Sourced from premium sesame and pure jaggery, these balls ensure rich flavor and quality. Ideal for gifting or enjoying with tea, they offer a wholesome, calcium-rich bite. A pantry staple, White Sesame Balls bring authentic Indian taste to any occasion. Use them as a dessert or energy snack for a satisfying crunch. Their sweet, nutty profile and traditional charm make them a must-have for celebrations or daily indulgence, delivering quality and flavor."
    },
    {
        id: 4,
        name: "Black Sesame Balls",
        image: Sancks4,
        title: "Black Sesame Balls",
        description: "Black Sesame Balls, a classic Indian sweet, combine roasted black sesame seeds with jaggery for a rich, nutty flavor. Perfect for festivals or snacks, their crunchy texture and unique taste delight all. Sourced from premium sesame and pure jaggery, these balls ensure consistent quality. Ideal for gifting or pairing with coffee, they offer a calcium-rich, wholesome treat. A pantry essential, Black Sesame Balls bring traditional Indian sweetness to any occasion. Enjoy them as a dessert or energy snack for a satisfying bite. Their deep flavor and cultural charm make them a must-have for celebrations or daily indulgence, delivering authentic taste and quality in every ball."
    },
    {
        id: 5,
        name: "Peanut Salt",
        image: Sancks5,
        title: "Peanut Salt",
        description: "Peanut Salt, roasted peanuts with a savory salt seasoning, offers a crunchy, protein-packed snack for all ages. Perfect for munching on the go or pairing with evening tea, its simple flavor satisfies cravings. Sourced from premium peanuts, this snack ensures quality and crispness. Ideal for parties, lunchboxes, or casual snacking, it adds a savory touch to any moment. A pantry staple, Peanut Salt is easy to enjoy as a standalone treat or mixed with salads. Its light seasoning and nutty taste make it a must-have for quick, wholesome bites. Enjoy the classic Indian snack with consistent quality and flavor, perfect for everyday indulgence."
    },
    {
        id: 6,
        name: "Peanut Chilli",
        image: Sancks6,
        title: "Peanut Chilli",
        description: "Peanut Chilli, roasted peanuts tossed with spicy chili seasoning, delivers a fiery, crunchy snack for bold palates. Perfect for parties or evening munchies, its intense flavor pairs well with cool drinks. Sourced from premium peanuts and quality spices, this snack ensures consistent taste and crispness. Ideal for snacking on the go or adding to chaat, it offers a protein-rich bite. A pantry essential, Peanut Chilli brings Indian zest to any occasion. Enjoy its spicy, nutty profile as a standalone treat or salad topping. Its vibrant flavor and quality make it a must-have for spice lovers, delivering authentic taste and crunch in every handful."
    },
    {
        id: 7,
        name: "Peanut Pepper",
        image: Sancks7,
        title: "Peanut Pepper",
        description: "Peanut Pepper, roasted peanuts with bold black pepper seasoning, offers a spicy, crunchy snack for adventurous eaters. Perfect for pairing with tea or enjoying at gatherings, its zesty flavor excites the palate. Sourced from premium peanuts and quality spices, this snack ensures crispness and consistent taste. Ideal for lunchboxes or casual munching, it adds a peppery kick to any moment. A pantry staple, Peanut Pepper brings Indian flair to snacking. Enjoy its warm, nutty profile as a standalone treat or in mixes. Its robust flavor and quality make it a must-have for spice enthusiasts, delivering authentic taste and satisfying crunch in every bite."
    },
    {
        id: 8,
        name: "Kamarcut",
        image: Sancks8,
        title: "Kamarcut",
        description: "Kamarcut, a traditional South Indian sweet, blends roasted nuts and jaggery into a crunchy, caramelized treat. Perfect for festivals or quick snacks, its sweet, nutty flavor delights all ages. Sourced from premium ingredients, this kamarcut ensures quality and authentic taste. Ideal for gifting or enjoying with tea, it offers a wholesome, energy-packed bite. A pantry essential, Kamarcut brings classic Indian sweetness to any occasion. Use it as a dessert or travel snack for a satisfying crunch. Its rich texture and traditional charm make it a must-have for celebrations or daily indulgence, delivering consistent quality and nostalgic flavor in every piece."
    },
    {
        id: 9,
        name: "Hot Mixture",
        image: Sancks9,
        title: "Hot Mixture",
        description: "Hot Mixture, a spicy South Indian snack blend, combines crunchy sev, nuts, and fiery spices for a bold treat. Perfect for tea-time or parties, its intense flavor excites spice lovers. Sourced from premium ingredients, this mixture ensures quality and consistent crunch. Ideal for snacking on the go or adding to chaat, it offers a savory, protein-rich bite. A pantry staple, Hot Mixture brings authentic Indian zest to any occasion. Enjoy its spicy, crunchy profile as a standalone snack or garnish. Its vibrant flavor and quality make it a must-have for festive gatherings or daily munching, delivering traditional taste and satisfaction in every handful."
    },
    {
        id: 10,
        name: "Garlic Mixture",
        image: Sancks10,
        title: "Garlic Mixture",
        description: "Garlic Mixture, a savory South Indian snack, blends crunchy sev, nuts, and aromatic garlic seasoning for a bold treat. Perfect for tea-time or gatherings, its unique flavor delights all palates. Sourced from premium ingredients, this mixture ensures consistent quality and crunch. Ideal for snacking on the go or adding to chaat, it offers a protein-rich bite. A pantry essential, Garlic Mixture brings authentic Indian taste to any occasion. Enjoy its garlicky, savory profile as a standalone snack or garnish. Its robust flavor and quality make it a must-have for festive spreads or daily munching, delivering traditional charm and satisfaction in every handful."
    },
    {
        id: 11,
        name: "Chana Fry",
        image: Sancks11,
        title: "Chana Fry",
        description: "Chana Fry, roasted chickpeas with savory spices, offers a crunchy, protein-packed snack for all ages. Perfect for munching on the go or pairing with tea, its bold flavor satisfies cravings. Sourced from premium chickpeas, this snack ensures consistent quality and crispness. Ideal for lunchboxes, parties, or casual snacking, it adds a savory touch to any moment. A pantry staple, Chana Fry brings authentic Indian taste to your kitchen. Enjoy its spicy, nutty profile as a standalone treat or in salad mixes. Its wholesome flavor and quality make it a must-have for healthy snacking, delivering traditional crunch and satisfaction in every bite."
    },
    {
        id: 12,
        name: "Kadalai Paruppu",
        image: Sancks12,
        title: "Kadalai Paruppu",
        description: "Kadalai Paruppu, roasted split chickpeas, is a crunchy, protein-rich South Indian snack with a savory flavor. Perfect for tea-time or festive gatherings, it pairs well with coffee or chaat. Sourced from premium chickpeas, this snack ensures quality and consistent crunch. Ideal for lunchboxes or as a garnish for curries, it offers a wholesome, nutty bite. A pantry essential, Kadalai Paruppu brings authentic Indian taste to any occasion. Enjoy its simple, savory profile as a standalone treat or in mixes. Its traditional flavor and quality make it a must-have for daily munching or celebrations, delivering satisfying crunch and nutrition in every handful."
    },
    {
        id: 13,
        name: "Tapioca Chips",
        image: Sancks13,
        title: "Tapioca Chips",
        description: "Tapioca Chips, thinly sliced and fried cassava, offer a crispy, savory snack with a light, addictive crunch. Perfect for tea-time or parties, their mild flavor pairs well with spicy dips. Sourced from premium tapioca, these chips ensure quality and consistent texture. Ideal for snacking on the go or as a side with meals, they suit all ages. A pantry staple, Tapioca Chips bring South Indian tradition to your kitchen. Enjoy their simple, crunchy profile as a standalone treat or with chutneys. Their authentic taste and quality make them a must-have for festive gatherings or daily munching, delivering satisfying crunch in every bite."
    },
    {
        id: 14,
        name: "Tapioca Stick",
        image: Sancks14,
        title: "Tapioca Stick",
        description: "Tapioca Stick, fried cassava strips, offers a crunchy, savory snack with a unique, stick-like shape. Perfect for tea-time or casual munching, their light flavor pairs well with spicy dips. Sourced from premium tapioca, these sticks ensure consistent quality and crispness. Ideal for parties, lunchboxes, or as a side with meals, they suit kids and adults. A pantry essential, Tapioca Stick brings South Indian tradition to your kitchen. Enjoy its satisfying crunch as a standalone treat or with chutneys. Its authentic taste and quality make it a must-have for festive gatherings or daily snacking, delivering delightful texture and flavor in every bite."
    },
    {
        id: 15,
        name: "Thattai Vadai",
        image: Sancks15,
        title: "Thattai Vadai",
        description: "Thattai Vadai, a crispy South Indian snack, blends rice flour and spices into a crunchy, savory disc. Perfect for festivals or tea-time, its bold flavor delights spice lovers. Sourced from premium ingredients, this vadai ensures quality and consistent crunch. Ideal for snacking on the go or serving at gatherings, it pairs well with chutneys or tea. A pantry staple, Thattai Vadai brings authentic South Indian taste to any occasion. Enjoy its spicy, crispy profile as a standalone treat or side. Its traditional flavor and quality make it a must-have for celebrations or daily munching, delivering satisfying crunch and zest in every bite."
    },
    {
        id: 16,
        name: "Banana Chips",
        image: Sancks16,
        title: "Banana Chips",
        description: "Banana Chips, thinly sliced and fried plantains, offer a crispy, savory snack with a subtle sweetness. Perfect for tea-time or parties, their crunchy texture pairs well with spicy dips. Sourced from premium bananas, these chips ensure consistent quality and taste. Ideal for snacking on the go, lunchboxes, or festive spreads, they suit all ages. A pantry essential, Banana Chips bring South Indian tradition to your kitchen. Enjoy their light, flavorful profile as a standalone treat or with chutneys. Their authentic taste and quality make them a must-have for daily munching or celebrations, delivering satisfying crunch and a hint of sweetness in every bite."
    },
];

function Snacks() {
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
                                Snacks
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
                    {SnacksVarieties.map((item) => (
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
                                <Link to={`/Snacks/${encodeURIComponent(item.name)}`}>
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
                                            to={`/Snacks/${encodeURIComponent(item.name)}`}
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

export default Snacks;
export { SnacksVarieties };
