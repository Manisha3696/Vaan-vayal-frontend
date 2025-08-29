import React from 'react';
import { Link } from 'react-router-dom';
import Rice1 from '../../../images/Rice/boiled-rice.jpg';
import Rice2 from '../../../images/Rice/white-rice.jpg';
import Rice3 from '../../../images/Rice/red-rice.jpg';
import Rice4 from '../../../images/Rice/basmathi-rice.jpg';
import Rice5 from '../../../images/Rice/siragasamba-rice.jpg';
import Rice6 from '../../../images/Rice/Matta-Rice.jpg';
import Rice7 from '../../../images/Rice/Idli-Rice.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Rice/Rice-baner.jpg';
import '../../../Css/Style.css'

const riceVarieties = [
  {
    id: 1,
    name: "Boiled Rice",
    image: Rice1,
    title: "Premium Boiled Rice",
    description: "Our premium boiled rice is partially pre-cooked for quick and easy preparation, delivering a soft, tender texture and mild flavor that complements a wide range of dishes. Ideal for everyday meals, this versatile rice pairs perfectly with curries, stir-fries, and stews. Its consistent quality ensures fluffy, non-sticky grains every time, making it a staple for busy households. Sourced from trusted farms, this rice offers reliable performance in the kitchen, whether you're preparing a quick weeknight dinner or a hearty family meal. Enjoy the convenience and subtle taste that makes boiled rice a go-to choice for all your culinary needs, from simple sides to flavorful main dishes."
  },
  {
    id: 2,
    name: "White Raw Rice",
    image: Rice2,
    title: "Premium White Raw Rice",
    description: "Premium white raw rice, polished to perfection, offers a fluffy, non-sticky texture ideal for a variety of dishes. Perfect for biryanis, pulaos, or simple steamed rice, its neutral flavor complements bold spices and delicate broths alike. Sourced from high-quality crops, this rice cooks evenly, ensuring consistent results for both novice and experienced cooks. Its versatility makes it a pantry essential, suitable for everything from everyday meals to festive feasts. Whether paired with rich curries or light vegetable stir-fries, this white raw rice delivers a satisfying texture and clean taste, enhancing any dish with its reliable quality and ease of preparation."
  },
  {
    id: 3,
    name: "Red Raw Rice",
    image: Rice3,
    title: "Premium Red Raw Rice",
    description: "Nutritious red raw rice brings a nutty flavor and chewy texture to your plate, packed with fiber and antioxidants for a wholesome meal choice. Its vibrant reddish hue adds visual appeal to traditional and modern dishes alike. Perfect for health-conscious eaters, this rice shines in salads, stir-fries, and South Indian recipes. Sourced from premium fields, it retains its natural bran layer, offering enhanced nutrition. Its robust flavor pairs well with bold spices and hearty ingredients, making it ideal for flavorful curries or grain bowls. Easy to cook, this rice provides a satisfying, wholesome addition to any diet, blending taste and health effortlessly."
  },
  {
    id: 4,
    name: "Basmati Rice",
    image: Rice4,
    title: "Premium Basmati Rice",
    description: "Aromatic long-grain basmati rice, renowned for its delicate fragrance and fluffy texture, elevates any meal to a special occasion. Ideal for biryanis, pulaos, and pilafs, its slender grains remain separate and light when cooked, perfect for soaking up rich flavors. Sourced from the finest regions, this premium rice offers consistent quality for both everyday and festive dishes. Its subtle nutty taste complements spicy curries, grilled meats, or creamy sauces, making it a versatile choice. Easy to prepare, basmati rice brings elegance to your table, whether you're hosting a dinner party or enjoying a quiet meal at home, delivering unmatched aroma and texture every time."
  },
  {
    id: 5,
    name: "Seeraga Samba Rice",
    image: Rice5,
    title: "Premium Seeraga Samba Rice",
    description: "Fragrant Seeraga Samba rice, a South Indian treasure, boasts small grains with a distinctive aroma and fluffy texture. Perfect for biryanis and pulaos, its unique flavor enhances rich, spiced dishes, making it a favorite for traditional recipes. Sourced from premium crops, this rice absorbs flavors beautifully while retaining its light, non-sticky quality. Ideal for festive meals or everyday cooking, it pairs wonderfully with curries, dals, or grilled vegetables. Its quick-cooking nature and delicate taste make it a must-have for authentic South Indian cuisine, bringing a touch of heritage to your kitchen with every perfectly cooked grain, offering both ease and exceptional flavor."
  },
  {
    id: 6,
    name: "Matta Rice",
    image: Rice6,
    title: "Premium Matta Rice",
    description: "Robust Matta rice, a Kerala favorite, features a reddish hue and earthy flavor, rich in fiber for wholesome meals. Its chewy texture makes it perfect for traditional South Indian dishes like rice porridge or paired with spicy curries. Sourced from trusted farms, this rice retains its natural bran, offering enhanced nutrition and a hearty bite. Ideal for health-conscious cooks, it complements bold flavors and thick gravies, adding depth to every dish. Easy to prepare, Matta rice is a versatile staple for everyday meals or special occasions, bringing authentic regional taste and satisfying texture to your table with its unique character and nutritional benefits."
  },
  {
    id: 7,
    name: "Idli Rice",
    image: Rice7,
    title: "Premium Idli Rice",
    description: "Premium idli rice is specially selected for crafting soft, fluffy idlis and crispy dosas, a cornerstone of South Indian cuisine. This short-grain rice ensures perfect fermentation, yielding a smooth, airy batter for authentic results. Sourced from high-quality crops, it delivers consistent texture and taste, making it ideal for breakfast staples or snacks. Its versatility extends to other steamed dishes, offering a neutral flavor that pairs well with chutneys and sambar. Easy to soak and grind, this rice is a must-have for home cooks aiming to recreate traditional South Indian flavors, bringing restaurant-quality idlis and dosas to your kitchen with ease and precision."
  },
];

function RiceList() {
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
                Rice
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Product Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
          Pure rice, Global quality
        </h2>

        <div className="row">
          {riceVarieties.map((item) => (
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
                <Link to={`/rice/${encodeURIComponent(item.name)}`}>
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
                      to={`/rice/${encodeURIComponent(item.name)}`}
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

export default RiceList;
export { riceVarieties };
