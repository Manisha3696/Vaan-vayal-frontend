import React from 'react';
import { Link } from 'react-router-dom';
import Rava1 from '../../../images/Rava&soya/idly-rava-exporter-vaan-vayal-enterprises.jpg';
import Rava2 from '../../../images/Rava&soya/rava-roasted-exporter-vaan-vayal-enterprises.jpg';
import Rava3 from '../../../images/Rava&soya/samba-wheat-rava-exporter-vaan-vayal-enterprises.jpg';
import Rava4 from '../../../images/Rava&soya/soya-chunks-small-exporter-vaan-vayal-enterprises.jpg';
import Rava5 from '../../../images/Rava&soya/soya-chunks-medium-exporter-vaan-vayal-enterprises.jpg';
import Rava6 from '../../../images/Rava&soya/fried-grams-exporter-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Rava&soya/rava-banner.jpg';

const RavaVarieties = [
  {
    id: 1,
    name: "Idly Rava",
    image: Rava1,
    title: "Idly Rava",
    description: "Idly Rava, coarsely ground rice, is a South Indian staple for crafting soft, fluffy idlis and dosas. Perfect for breakfast or snacks, its coarse texture ensures ideal fermentation and a light batter. Sourced from premium rice, this rava guarantees consistent quality and authentic taste. Ideal for traditional recipes, it pairs well with chutneys or sambar for a wholesome meal. Easy to prepare, Idly Rava is a pantry essential for home cooks seeking restaurant-quality results. Enjoy its versatility in idlis, upma, or steamed dishes, delivering a delicate texture and South Indian flavor. Its reliable performance makes it a must-have for delicious, traditional breakfasts."
  },
  {
    id: 2,
    name: "Rava Roasted",
    image: Rava2,
    title: "Rava Roasted",
    description: "Rava Roasted, pre-toasted semolina, offers a nutty flavor and fine texture, perfect for quick South Indian dishes. Ideal for upma, kesari, or halwa, its roasted nature enhances aroma and reduces cooking time. Sourced from high-quality wheat, this rava ensures consistent quality and a golden finish. Perfect for sweet or savory recipes, it pairs well with vegetables, jaggery, or spices. A versatile pantry staple, Rava Roasted suits both traditional and modern dishes, delivering authentic taste. Enjoy its ease of use in breakfasts, desserts, or snacks, providing a rich, wholesome flavor. Its toasted quality makes it a must-have for flavorful, time-saving meals."
  },
  {
    id: 3,
    name: "Samba Wheat Rava",
    image: Rava3,
    title: "Samba Wheat Rava",
    description: "Samba Wheat Rava, coarsely ground from premium samba wheat, delivers a hearty texture and nutty flavor for South Indian dishes. Perfect for upma, pongal, or savory porridges, it absorbs flavors beautifully. Sourced from quality wheat, this rava ensures consistent results and wholesome taste. Ideal for traditional recipes or healthy meals, it pairs well with vegetables, lentils, or spices. A pantry essential, Samba Wheat Rava offers versatility for breakfast or main dishes, delivering authentic South Indian flavor. Enjoy its robust texture in both sweet and savory preparations, providing nutrition and taste. Its reliable quality makes it a must-have for rustic, delicious meals."
  },
  {
    id: 4,
    name: "Soya Chunks Small",
    image: Rava4,
    title: "Soya Chunks Small",
    description: "Soya Chunks Small, made from defatted soy flour, are a protein-rich ingredient perfect for Indian curries and stir-fries. Their small size ensures quick cooking and excellent flavor absorption. Sourced from premium soybeans, these chunks offer consistent quality and a meaty texture. Ideal for vegetarian dishes like soya masala or pulao, they pair well with spices and vegetables. A versatile pantry staple, Soya Chunks Small suit both traditional and modern recipes, delivering nutrition and taste. Enjoy their ease of use in gravies, snacks, or salads, providing a healthy protein boost. Their reliable quality makes them a must-have for wholesome, flavorful meals."
  },
  {
    id: 5,
    name: "Soya Chunks Medium",
    image: Rava5,
    title: "Soya Chunks Medium",
    description: "Soya Chunks Medium, crafted from defatted soy flour, offer a protein-packed, meaty texture for Indian and global dishes. Perfect for curries, biryanis, or stir-fries, their medium size ensures robust flavor absorption. Sourced from premium soybeans, these chunks deliver consistent quality and versatility. Ideal for vegetarian recipes like soya keema or pulao, they pair well with bold spices and vegetables. A pantry essential, Soya Chunks Medium suit traditional and modern cuisines, providing nutrition and taste. Enjoy their ease of preparation in gravies, soups, or salads, adding a healthy protein boost. Their reliable quality makes them a must-have for hearty, flavorful meals."
  },
  {
    id: 6,
    name: "Fried Grams",
    image: Rava6,
    title: "Fried Grams",
    description: "Fried Grams, roasted split chickpeas, are a crunchy, protein-rich ingredient for Indian snacks and dishes. Perfect for chutneys, gravies, or as a standalone snack, their nutty flavor enhances every recipe. Sourced from premium chickpeas, these grams ensure consistent quality and a crisp texture. Ideal for traditional recipes like sundal or modern mixes with spices, they pair well with onions or coconut. A versatile pantry staple, Fried Grams suit both savory and sweet preparations, delivering nutrition and taste. Enjoy their ease of use in snacks, curries, or garnishes, providing a wholesome crunch. Their reliable quality makes them a must-have for flavorful meals."
  },
];

function Rava() {
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
                Rava & Soya Chunks
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
          Quality that speaks Globally
        </h2>

        <div className="row">
          {RavaVarieties.map((item) => (
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
                <Link to={`/Rava/${encodeURIComponent(item.name)}`}>
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
                      to={`/Rava/${encodeURIComponent(item.name)}`}
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

export default Rava;
export { RavaVarieties };
