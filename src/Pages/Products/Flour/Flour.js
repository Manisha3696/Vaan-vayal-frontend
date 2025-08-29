import React from 'react';
import { Link } from 'react-router-dom';
import Flour1 from '../../../images/Flour/Ragi-flour-exporter-vann-vayal-enterprises.jpg';
import Flour2 from '../../../images/Flour/Atta-flour-exporter-vann-vayal-enterprises.jpg';
import Flour3 from '../../../images/Flour/steamed-atta-flour-exporter-vann-vayal-enterprises.jpg';
import Flour4 from '../../../images/Flour/white-rice-flour-exporter-vann-vayal-enterprises.jpg';
import Flour5 from '../../../images/Flour/red-rice-flour-exporter-vann-vayal-enterprises.jpg';
import Flour6 from '../../../images/Flour/maida-flour-exporter-vann-vayal-enterprises.jpg';
import Flour7 from '../../../images/Flour/wheat-flour-exporter-vann-vayal-enterprises.jpg';
import Flour8 from '../../../images/Flour/moongdal-flour-exporter-vaan-vayal-enterprises.jpg';
import Flour9 from '../../../images/Flour/mungdal-roasted-flour-exporter-vann-vayal-enterprises.jpg';
import Flour10 from '../../../images/Flour/uraldal-banner.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Flour/Flour-banner-exporter-vann-vayal-enterprises.jpg';

const FlourVarieties = [
  {
    id: 1,
    name: "Ragi Flour",
    image: Flour1,
    title: "Ragi Flour",
    description: "Ragi Flour, made from nutrient-rich finger millet, offers a nutty flavor and high fiber content, ideal for healthy South Indian dishes. Perfect for ragi dosa, porridge, or rotis, it’s a gluten-free choice for wholesome meals. Sourced from premium ragi, this flour ensures a smooth texture and easy mixing. Rich in calcium and iron, it’s great for health-conscious diets, pairing well with spices or jaggery. A versatile pantry staple, Ragi Flour suits both traditional recipes like mudde and modern baked goods. Enjoy its earthy taste and nutritional benefits in breakfast, snacks, or main dishes, delivering authentic flavor and wellness with every use."
  },
  {
    id: 2,
    name: "Atta Flour",
    image: Flour2,
    title: "Atta Flour",
    description: "Atta Flour, finely ground from whole wheat, is a staple for soft, fluffy rotis, chapatis, and parathas. Its high fiber content and rich, nutty flavor make it ideal for everyday Indian meals. Sourced from premium wheat, this flour ensures easy kneading and consistent dough quality. Perfect for traditional breads or wraps, it pairs well with curries, dals, or grilled vegetables. A must-have for home cooks, Atta Flour delivers authentic taste and reliable performance for both novice and expert bakers. Its wholesome nature makes it suitable for daily meals or festive feasts, offering a perfect balance of flavor, texture, and nutrition in every bite."
  },
  {
    id: 3,
    name: "Steamed Atta Flour",
    image: Flour3,
    title: "Steamed Atta Flour",
    description: "Steamed Atta Flour, made from pre-steamed whole wheat, offers a unique texture and enhanced flavor for soft rotis and specialty breads. Ideal for traditional Indian dishes like pathiri or steamed flatbreads, it ensures easy rolling and a tender bite. Sourced from high-quality wheat, this flour provides consistent results for home cooks. Its subtle, nutty taste pairs perfectly with curries, chutneys, or spicy gravies. A versatile pantry essential, Steamed Atta Flour is great for both everyday meals and festive recipes. Enjoy its smooth dough quality and authentic South Indian appeal, delivering wholesome nutrition and exceptional taste in every dish you create."
  },
  {
    id: 4,
    name: "White Rice Flour",
    image: Flour4,
    title: "White Rice Flour",
    description: "White Rice Flour, finely milled from polished rice, is perfect for soft idlis, dosas, and South Indian snacks like murukku. Its smooth, gluten-free texture ensures light, airy batters and crispy fried treats. Sourced from premium rice, this flour delivers consistent quality for traditional and modern recipes. Ideal for gluten-sensitive diets, it pairs well with chutneys or spicy fillings. Easy to mix and ferment, White Rice Flour is a pantry staple for authentic Indian cuisine. Whether for breakfast dishes, sweets, or savory snacks, it offers versatility and a mild flavor, bringing delicate texture and reliable performance to your kitchen with every use."
  },
  {
    id: 5,
    name: "Red Rice Flour",
    image: Flour5,
    title: "Red Rice Flour",
    description: "Red Rice Flour, ground from nutrient-rich red rice, offers a nutty flavor and high fiber content for healthy, gluten-free dishes. Perfect for dosas, puttu, or traditional South Indian snacks, its earthy taste enhances both savory and sweet recipes. Sourced from premium red rice, this flour ensures a smooth texture and consistent quality. Ideal for health-conscious cooks, it pairs well with spices, coconut, or jaggery. A versatile pantry staple, Red Rice Flour suits everything from breakfast to festive treats. Enjoy its wholesome nutrition and robust flavor in rotis, porridges, or baked goods, delivering authentic taste and wellness with every delicious, hearty dish."
  },
  {
    id: 6,
    name: "Maida Flour",
    image: Flour6,
    title: "Maida Flour",
    description: "Maida Flour, finely milled refined wheat flour, is perfect for soft naans, flaky parathas, and delicate pastries. Its smooth, light texture ensures pliable dough and crisp results for both Indian and global recipes. Sourced from premium wheat, this flour delivers consistent quality for baking or frying. Ideal for puris, samosas, or cakes, it pairs well with rich fillings or sweet syrups. A versatile pantry essential, Maida Flour suits festive treats or everyday cooking, offering a refined taste and texture. Enjoy its ability to create light, golden dishes, bringing professional-quality results to your kitchen with ease and exceptional performance in every recipe."
  },
  {
    id: 7,
    name: "Wheat Flour Steamed",
    image: Flour7,
    title: "Wheat Flour Steamed",
    description: "Wheat Flour Steamed, pre-treated for a unique texture, is ideal for soft, fluffy pathiri, kozhukattai, or steamed Indian breads. Its smooth, pliable dough ensures easy preparation and a tender bite. Sourced from high-quality wheat, this flour offers consistent results for traditional South Indian recipes. Perfect for pairing with spicy curries or coconut-based dishes, it enhances both flavor and texture. A pantry staple for festive or daily meals, Wheat Flour Steamed brings authentic taste to your kitchen. Enjoy its versatility in steamed or baked dishes, delivering wholesome nutrition and a delicate, satisfying quality that elevates every meal with ease and tradition."
  },
  {
    id: 8,
    name: "Mung Dal Flour",
    image: Flour8,
    title: "Mung Dal Flour",
    description: "Mung Dal Flour, ground from premium mung beans, offers a protein-rich, gluten-free option for savory Indian dishes. Perfect for dosas, pancakes, or snacks like pakoras, its nutty flavor and smooth texture shine in every recipe. Sourced from high-quality mung dal, this flour ensures easy mixing and consistent results. Ideal for health-conscious diets, it pairs well with spices, vegetables, or chutneys. A versatile pantry staple, Mung Dal Flour suits both traditional recipes and modern culinary creations. Enjoy its wholesome taste in breakfast dishes or savory fritters, delivering nutrition and authentic Indian flavor with every bite, perfect for quick, delicious meals."
  },
  {
    id: 9,
    name: "Roasted Mung Dal Flour",
    image: Flour9,
    title: "Roasted Mung Dal Flour",
    description: "Roasted Mung Dal Flour, made from toasted mung beans, delivers a rich, nutty flavor and gluten-free versatility for Indian dishes. Perfect for savory pancakes, dosas, or snacks like chakli, its aromatic profile enhances every recipe. Sourced from premium mung dal, this flour ensures smooth batters and consistent quality. Ideal for health-conscious cooks, it pairs beautifully with spices or chutneys. A pantry essential, Roasted Mung Dal Flour suits both traditional and creative dishes, offering a wholesome, protein-rich option. Enjoy its deep flavor in breakfast or snack recipes, bringing authentic taste and nutrition to your kitchen with every crispy, delicious bite."
  },
  {
    id: 10,
    name: "Urad Flour",
    image: Flour10,
    title: "Urad Flour",
    description: "Urad Flour, finely ground from urad dal, is a staple for soft idlis, crispy dosas, and South Indian snacks like vadas. Its smooth, gluten-free texture ensures perfect fermentation and light, airy batters. Sourced from premium urad dal, this flour delivers consistent quality for authentic recipes. Ideal for breakfast or festive meals, it pairs wonderfully with chutneys, sambar, or spicy fillings. A versatile pantry essential, Urad Flour suits both traditional and modern dishes, offering rich flavor and reliable performance. Enjoy its ability to create fluffy, golden dishes, bringing South Indian tradition and wholesome taste to your kitchen with every perfectly prepared meal or snack."
  },
];

function Flour() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="position-relative text-white text-center" y
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
                Flour
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
          Pure Grains, Finely Milled
        </h2>

        <div className="row">
          {FlourVarieties.map((item) => (
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
                <Link to={`/Flour/${encodeURIComponent(item.name)}`}>
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
                      to={`/Flour/${encodeURIComponent(item.name)}`}
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

export default Flour;
export { FlourVarieties };
