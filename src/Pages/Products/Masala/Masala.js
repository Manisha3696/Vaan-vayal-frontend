import React from 'react';
import { Link } from 'react-router-dom';
import masala1 from '../../../images/Masala/Rasam-masal-exporter-Vaan vayal-enterprises.jpg';
import masala2 from '../../../images/Masala/garam-masal-exporter-Vaan vayal-enterprises.jpg';
import masala3 from '../../../images/Masala/sambar-masal-exporter-Vaan vayal-enterprises.jpg';
import masala4 from '../../../images/Masala/pulikuzhambu-banner.jpg';
import masala5 from '../../../images/Masala/chicken-masal-exporter-Vaan vayal-enterprises.jpg';
import masala6 from '../../../images/Masala/fish-masala-exporters-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Masala/masala-banner-exporter-vaan-vayal-enterprises.jpg';

const MasalaVarieties = [
  {
    id: 1,
    name: "Rasam Masala",
    image: masala1,
    title: "Rasam Masala",
    description: "Rasam Masala, a vibrant South Indian spice blend, delivers a tangy, peppery kick for authentic rasam. Crafted from premium coriander, cumin, and black pepper, it enhances soups and lentil dishes with its aromatic warmth. Perfect for quick rasam or as a seasoning for vegetables, this mix ensures bold flavor in every spoonful. Sourced from trusted spice growers, it offers consistent quality for home cooks. Ideal for daily meals or festive menus, Rasam Masala pairs well with tamarind and tomatoes, creating a comforting, spicy broth. A pantry essential, it brings South Indian tradition to your kitchen, offering versatile, zesty flavor for soups, stews, or creative dishes."
  },
  {
    id: 2,
    name: "Garam Masala",
    image: masala2,
    title: "Garam Masala",
    description: "Garam Masala, a rich North Indian spice blend, adds warm, aromatic depth to curries, biryanis, and gravies. Made from premium spices like cardamom, cinnamon, and cloves, it delivers a balanced, bold flavor. Perfect for meats, vegetables, or lentils, this versatile mix elevates both everyday and festive dishes. Sourced from high-quality spice farms, it ensures consistent taste and aroma. Ideal for enhancing stir-fries, rice, or marinades, Garam Masala is a pantry staple for authentic Indian cuisine. Its robust, fragrant profile transforms simple ingredients into flavorful meals. Enjoy its versatility and rich taste in traditional or modern recipes with ease."
  },
  {
    id: 3,
    name: "Sambar Powder",
    image: masala3,
    title: "Sambar Powder",
    description: "Sambar Powder, a South Indian essential, brings bold, tangy flavor to sambar, a lentil-based vegetable stew. Crafted from premium coriander, chana dal, and red chilies, it offers a perfect balance of spice and aroma. Ideal for daily meals or festive feasts, this mix enhances sambar, rasam, or vegetable curries. Sourced from trusted spice growers, it ensures consistent quality and authentic taste. Easy to use, it pairs well with tamarind, lentils, and fresh vegetables, creating a hearty dish. A pantry must-have, Sambar Powder delivers South Indian tradition to your kitchen, offering versatile flavor for stews, soups, or creative recipes with its rich, spicy profile."
  },
  {
    id: 4,
    name: "Puli Kulambu Masala",
    image: masala4,
    title: "Puli Kulambu Masala",
    description: "Puli Kulambu Masala, a South Indian spice blend, delivers a tangy, spicy kick for authentic tamarind-based curries. Made from premium coriander, fenugreek, and red chilies, it enhances puli kulambu with its bold, aromatic flavor. Perfect for vegetable or meat-based gravies, this mix is ideal for daily meals or special occasions. Sourced from high-quality spices, it ensures consistent taste and easy preparation. Pair it with tamarind, garlic, or shallots for a rich, tangy dish. A pantry essential, Puli Kulambu Masala brings South Indian tradition to your kitchen, offering versatile, zesty flavor for curries, stews, or creative recipes with its distinctive, robust profile."
  },
  {
    id: 5,
    name: "Chicken Masala",
    image: masala5,
    title: "Chicken Masala",
    description: "Chicken Masala, a robust Indian spice blend, adds fiery, aromatic depth to chicken curries, grills, and stir-fries. Crafted from premium spices like coriander, cumin, and turmeric, it delivers bold flavor and rich aroma. Perfect for both everyday meals and festive dishes, this mix ensures juicy, flavorful chicken every time. Sourced from trusted spice farms, it offers consistent quality for home cooks. Ideal for marinades, gravies, or tandoori dishes, Chicken Masala pairs well with onions, tomatoes, or yogurt. A pantry staple, it brings authentic Indian taste to your kitchen, offering versatile, spicy flavor for traditional or modern recipes with ease and reliability."
  },
  {
    id: 6,
    name: "Fish Masala",
    image: masala6,
    title: "Fish Masala",
    description: "Fish Masala, a vibrant South Indian spice blend, delivers a spicy, tangy flavor for authentic fish curries and fries. Made from premium red chilies, coriander, and turmeric, it enhances seafood with its bold, aromatic profile. Perfect for coastal-style dishes or grilled fish, this mix ensures rich taste in every bite. Sourced from high-quality spices, it offers consistent quality and easy use. Ideal for curries, marinades, or fried fish, Fish Masala pairs well with tamarind, coconut, or onions. A pantry essential, it brings South Indian tradition to your kitchen, offering versatile, zesty flavor for seafood dishes or creative recipes with its distinctive, robust taste."
  },
];

function Masala() {
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
                Masala
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
          Naturaly Grown, Globally known
        </h2>

        <div className="row">
          {MasalaVarieties.map((item) => (
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
                <Link to={`/Masala/${encodeURIComponent(item.name)}`}>
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
                      to={`/Masala/${encodeURIComponent(item.name)}`}
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

export default Masala;
export { MasalaVarieties };
