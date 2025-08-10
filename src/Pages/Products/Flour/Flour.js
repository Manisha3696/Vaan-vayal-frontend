// import React from "react";
// import '../../../Css/Style.css'
// import image1 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal.jpg'
// import image2 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png'

// const products = [
//     { id: 1, name: "Fresh Broccoli - Crisp", image: image2 },
//     { id: 2, name: "Beef Boneless", image: image1 },
//     { id: 3, name: "Almonds", image: image1 },
// ];

// const Flour = () => {
//     return (
//         <div className="container-fluid bg-body-tertiary">
//             <div className="product-grid">
//                 {products.map((product) => (
//                     <div key={product.id} className="product-card">
//                         <img src={product.image} alt={product.name} />
//                         <h4>{product.name}</h4>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Flour;
import React from 'react';
import { Link } from 'react-router-dom';
import Rice1 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png';
import Rice2 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png';
import Rice3 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png';
import Rice4 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png';
import Rice5 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png';
import Rice6 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png';
import Rice7 from '../../../images/Rice/White-Raw-Rice-Vaan-Vayal-removebg-preview.png';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../../images/Rice/Rice-baner.jpg';

const riceVarieties = [
  { id: 1, name: "Boiled Rice", image: Rice1 },
  { id: 2, name: "White Raw Rice", image: Rice2 },
  { id: 3, name: "Red Raw Rice", image: Rice3 },
  { id: 4, name: "Basmati Rice", image: Rice4 },
  { id: 5, name: "Seeraga Samba Rice", image: Rice5 },
  { id: 6, name: "Matta Rice", image: Rice6 },
  { id: 7, name: "Idli Rice", image: Rice7 },
];

function RiceList() {
  return (
    <div className='bg-body-tertiary'>
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
      <div className='container-fluid bg-body-tertiary'>
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
                  className="product"
                  style={{ backgroundColor: "#e6f3e6" }}
                // style={{
                //   width: '100%',
                //   textAlign: 'center',
                //   position: 'relative',
                //   overflow: 'hidden',
                //   border: '1px solid #eee',
                //   borderRadius: '6px',
                //   boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                //   backgroundColor: '#fff',
                //   transition: 'transform 0.3s ease',
                // }}
                >
                  <Link to={`/rice/${encodeURIComponent(item.name)}`}>
                    <div className="product-card" style={{ position: 'relative', overflow: 'hidden' }}>
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
                      <div className="text-center" style={{ padding: '10px 10px 15px 10px' }}>
                        <h6 style={{ fontSize: '16px', fontWeight: 600 }}>
                          <Link
                            to={`/rice/${encodeURIComponent(item.name)}`}
                            style={{ textDecoration: 'none', color: '#222' }}
                          >
                            {item.name}
                          </Link>
                        </h6>
                      </div>

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
    </div>
  );
}

export default RiceList;
export { riceVarieties };
