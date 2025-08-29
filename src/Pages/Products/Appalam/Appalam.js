import React from 'react';
import { Link } from 'react-router-dom';
import Appalam1 from '../../../images/appalam/rice-appalam-expoters-vaan-vayal-enterprises.jpg';
import Appalam2 from '../../../images/appalam/siraga-appalam-expoters-vaan-vayal-enterprises.jpg';
import Appalam3 from '../../../images/appalam/urad-appalam-expoters-vaan-vayal-enterprises.jpg';
import Appalam4 from '../../../images/appalam/milagu-appalam.jpg';
import Appalam5 from '../../../images/appalam/color-appalam-expoters-vaan-vayal-enterprises.jpg';
import Appalam6 from '../../../images/appalam/ring-appalam-expoters-vaan-vayal-enterprises.jpg';
import Appalam7 from '../../../images/appalam/sping-appalam-expoters-vaan-vayal-enterprises.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/appalam/appalam-banner-expoters-vaan-vayal-enterprises.jpg';

const AppalamVarieties = [
  {
    id: 1,
    name: "Rice Appalam",
    image: Appalam1,
    title: "Rice Appalam",
    description: "Crispy Rice Appalam, a South Indian classic, is made from high-quality rice flour for a light, crunchy texture. Perfect as a snack or meal accompaniment, it pairs wonderfully with sambar, chutneys, or curries. Sourced from trusted makers, these appalams puff up beautifully when fried, offering a golden, airy bite. Ideal for festive occasions or daily meals, they add a delightful crunch to any dish. Easy to prepare, simply fry in hot oil for a quick, authentic treat. Their mild flavor complements bold spices, making them a versatile addition to your pantry. Enjoy the traditional taste of South India with every perfectly crisp Rice Appalam."
  },
  {
    id: 2,
    name: "Siraga Appalam",
    image: Appalam2,
    title: "Siraga Appalam",
    description: "Siraga Appalam, crafted with premium ingredients, offers a unique, aromatic crunch inspired by South Indian traditions. Made with a blend of rice and select spices, it delivers a light, crispy texture that elevates meals or snacks. Perfect for pairing with dals, curries, or chutneys, these appalams puff up evenly when fried, ensuring a satisfying bite. Sourced from expert artisans, they bring authentic flavor to your table, ideal for festive gatherings or everyday dining. Quick to prepare, they fry to a golden crisp in seconds. Their subtle, spiced profile enhances any dish, making Siraga Appalam a must-have for lovers of traditional Indian cuisine."
  },
  {
    id: 3,
    name: "Urad Appalam",
    image: Appalam3,
    title: "Urad Appalam",
    description: "Urad Appalam, made from premium urad dal flour, offers a rich, savory flavor and crisp texture, a South Indian staple. Perfect for pairing with rice, curries, or chutneys, these appalams puff up beautifully when fried, delivering a light, crunchy bite. Sourced from trusted producers, they ensure consistent quality for every meal. Ideal for festivals or daily dining, their robust flavor complements spicy dishes. Easy to fry, they transform into golden discs in seconds, adding crunch to any spread. A versatile pantry essential, Urad Appalam brings authentic South Indian taste to your table, enhancing meals with its satisfying texture and traditional, wholesome appeal."
  },
  {
    id: 4,
    name: "Milagu Appalam",
    image: Appalam4,
    title: "Milagu Appalam",
    description: "Milagu Appalam, infused with bold black pepper, delivers a spicy, crispy delight for South Indian cuisine lovers. Made from rice flour and premium spices, it offers a zesty flavor and light texture that pairs perfectly with curries, sambar, or as a standalone snack. Sourced from skilled artisans, these appalams fry to a golden crisp, puffing up evenly for a satisfying crunch. Ideal for adding a peppery kick to meals or festive spreads, they’re quick to prepare in hot oil. Their distinctive spice profile enhances any dish, making Milagu Appalam a favorite for those who enjoy bold flavors and traditional Indian crunch in every bite."
  },
  {
    id: 5,
    name: "Color Appalam",
    image: Appalam5,
    title: "Color Appalam",
    description: "Color Appalam brings vibrant fun to your plate with its visually appealing, multicolored design and crisp texture. Made from rice flour and natural food colors, these appalams offer a mild flavor that complements curries, chutneys, or snacks. Perfect for festive occasions or kids’ meals, they puff up beautifully when fried, creating a light, crunchy treat. Sourced from quality producers, they ensure consistent taste and eye-catching appeal. Quick to prepare, they fry to perfection in seconds, adding a playful twist to any dish. Ideal for gatherings or casual dining, Color Appalam combines traditional crunch with a colorful, joyful presentation for all ages."
  },
  {
    id: 6,
    name: "Ring Appalam",
    image: Appalam6,
    title: "Ring Appalam",
    description: "Ring Appalam, with its unique ring shape, offers a crispy, light texture and mild flavor, perfect for South Indian meals or snacking. Made from premium rice flour, these appalams fry to a golden crisp, puffing up evenly for a fun, crunchy bite. Ideal for pairing with curries, dals, or chutneys, they add a playful twist to any spread. Sourced from trusted makers, they ensure quality and consistency. Quick to prepare, they’re ready in seconds when fried, making them a convenient pantry staple. Perfect for festive occasions or casual dining, Ring Appalam brings traditional taste and a distinctive shape to elevate your culinary experience."
  },
  {
    id: 7,
    name: "Spring Appalam",
    image: Appalam7,
    title: "Spring Appalam",
    description: "Spring Appalam, crafted with a special blend of rice flour and spices, delivers a light, crispy texture with a subtle, savory flavor. Perfect for pairing with South Indian curries, sambar, or chutneys, these appalams puff up beautifully when fried, offering a delightful crunch. Sourced from expert producers, they ensure consistent quality for every meal. Ideal for festive gatherings or daily dining, their unique preparation makes them a standout addition to any spread. Quick to fry, they transform into golden, airy discs in seconds. Spring Appalam brings authentic South Indian taste to your table, enhancing dishes with its crisp texture and versatile, traditional appeal."
  },
];

function Appalam() {
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
                Appalam
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
          {AppalamVarieties.map((item) => (
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
                <Link to={`/Appalam/${encodeURIComponent(item.name)}`}>
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
                      to={`/Appalam/${encodeURIComponent(item.name)}`}
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

export default Appalam;
export { AppalamVarieties };
