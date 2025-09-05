import React from 'react';
import Logo from '../../images/logo-1.png';

function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#f7e0a1ff' }}>
      {/* Top Social Bar */}
      <section className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 border-bottom border-secondary text-center text-md-start">
        <div className="mb-2 mb-md-0">
          <span>Connect with us on social networks:</span>
        </div>
        <div className="d-flex gap-3">
          <a href="/" className="text-white"><i className="bi bi-facebook"></i></a>
          <a href="/" className="text-white"><i className="bi bi-twitter"></i></a>
          <a href="/" className="text-white"><i className="bi bi-google"></i></a>
          <a href="/" className="text-white"><i className="bi bi-instagram"></i></a>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="pt-4">
        <div className="container text-center text-md-start">
          <div className="row gy-4">
            {/* Logo + About */}
            <div className="col-12 col-md-4">
              <img src={Logo} alt="Company Logo" height="60" className="mb-3" />
              <p className="m-0">
                We are committed to offering the best quality organic and sustainable products.  
                Explore our range and experience nature at its finest.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled m-0 p-0">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/about" className="text-white text-decoration-none">About</a></li>
                <li><a href="/globalbuyers" className="text-white text-decoration-none">Global Buyers</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="col-6 col-md-2">
              <h6 className="text-uppercase fw-bold mb-3">Products</h6>
              <ul className="list-unstyled m-0 p-0">
                <li><a href="/pooja-products" className="text-white text-decoration-none">Pooja Item</a></li>
                <li><a href="/Spices" className="text-white text-decoration-none">Spices</a></li>
                <li><a href="/Rice" className="text-white text-decoration-none">Rice</a></li>
                <li><a href="/Flour" className="text-white text-decoration-none">Flour</a></li>
              </ul>
            </div>

            {/* Address & Contact */}
            <div className="col-12 col-md-4">
              <h6 className="text-uppercase fw-bold mb-3">Address</h6>
              <p className="m-0"><i className="bi bi-geo-alt-fill me-2"></i>
                <strong>VAAN VAYAL ENTERPRISES PRIVATE LIMITED</strong><br />
                5/199, Mugappair East, Chennai - 600 037
              </p>
              <h6 className="text-uppercase fw-bold mt-3 mb-2">Contact</h6>
              <p className="m-0"><i className="bi bi-telephone-fill me-2"></i> +91 93427 03670</p>
              <p className="m-0"><i className="bi bi-envelope-fill me-2"></i> info@vaanvayal.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="text-center py-3 mt-3 border-top border-secondary">
        © 2025 Copyright
        <a className="text-white fw-bold ms-1" href="/">vaanvayal.com</a>
      </div>
    </footer>
  );
}

export default Footer;
