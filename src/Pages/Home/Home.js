import React from 'react'
import banner from '../../images/spices/mosala.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
 
     <div style={{ backgroundColor: '#e6f3e6', fontFamily: 'Arial, sans-serif' }}>
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
            <Link
  to="/contact"
  className="btn btn-success mt-4 px-4 py-2"
  style={{ borderRadius: '5px', fontWeight: '500' }}
>
  SHOP NOW
</Link>
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
  );
};

  


export default Home