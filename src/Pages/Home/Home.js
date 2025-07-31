import React from 'react'
import banner from '../../images/spices/mosala.png'
import spices1 from '../../images/categary/spices.jpg'
import pickel from '../../images/categary/pickel.jpg'
import flour from '../../images/categary/flour.jpg'
import masala1 from '../../images/categary/masala.jpg'
import oil1 from '../../images/categary/oil.jpg'
import rice1 from '../../images/categary/rice.jpg'
import snacks1 from '../../images/categary/snacks.jpg'
import soya1 from '../../images/categary/soya.jpg'
import salt1 from '../../images/categary/salt.jpg'
import appalam1 from '../../images/categary/appalam.jpg'
import jaggery1 from '../../images/categary/jaggery.jpg'

function Home() {
  const categories = [
    { title: 'Spices', img: spices1 },
    { title: 'Pickles', img: pickel },
    { title: 'Flour', img: flour },
    { title: 'Masala', img: masala1 },
    { title: 'Oil', img: oil1 },
    { title: 'Rice', img: rice1 },
    { title: 'Snacks', img: snacks1 },
    { title: 'Soya', img: soya1 },
    { title: 'Salt', img: salt1 },
    { title: 'Appalam', img: appalam1 },
    { title: 'Jaggery', img: jaggery1 },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* First Section - Green Background */}
      <div style={{ backgroundColor: '#e6f3e6' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ color: '#4CAF50', fontWeight: '600', letterSpacing: '1px' }}>ALL NATURAL PRODUCTS</p>
              <h1 style={{ fontSize: '38px', fontWeight: 'bold', color: '#2E7D32' }}>
                Fresh and Healthy<br />
                <span style={{ color: '#1B5E20' }}>Spices</span> Organic Market
              </h1>
              <p style={{ color: '#4b4b4b', fontSize: '16px', marginTop: '15px' }}>
                Organic spices sourced from natural farms and carefully packed to bring you purity and taste that meets the standards of tradition.
              </p>
              <button
                className="btn btn-success mt-4 px-4 py-2"
                style={{ borderRadius: '5px', fontWeight: '500' }}
                onClick={() => window.location.href = '/contact'}
              >
                SHOP NOW
              </button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={banner}
                alt="Spices Banner"
                className="img-fluid rounded"
                style={{ maxHeight: '400px', borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </div>
{/* category */}
     <div style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
  <div className="container py-5">
    <h4 style={{ fontWeight: 'bold', color: '#000' }}>Catagory</h4>
    <div className="row text-center mt-4">
      {categories.map((item, idx) => (
        <div className="col-6 col-md-2 mb-4" key={idx}>
          <img
            src={item.img}
            alt={item.title}
            className="img-fluid rounded-circle border"
            style={{
              width: '90px',
              height: '90px',
              objectFit: 'cover',
              border: '2px solid #4CAF50',
              padding: '5px',
            }}
          />
          <p className="mt-2" style={{ fontWeight: '500', color: '#333' }}>{item.title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
