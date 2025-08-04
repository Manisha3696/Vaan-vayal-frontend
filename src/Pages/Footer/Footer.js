import React from 'react';
import Logo from '../../images/logo-1.png';

function Footer() {
    return (
        <footer className="text-white" style={{ backgroundColor: '#f7e0a1ff' }}>
            <section className="d-flex justify-content-between align-items-center p-4 border-bottom border-secondary">
                <div className="me-5 d-none d-lg-block">
                    <span>Connect with us on social networks:</span>
                </div>
                <div>
                    <a href="/" className="me-4 text-white">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="/" className="me-4 text-white">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="/" className="me-4 text-white">
                        <i className="bi bi-google"></i>
                    </a>
                    <a href="/" className="me-4 text-white">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </section>

            <section className="pt-5">
                <div className="container text-center text-md-start">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <img src={Logo} alt="Company Logo" height="80" className="mb-3" />
                            <p>
                                We are committed to offering the best quality organic and sustainable products.
                                Explore our range and experience nature at its finest.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                            <p><a href="/" className="text-white text-decoration-none">Home</a></p>
                            <p><a href="/about" className="text-white text-decoration-none">About</a></p>
                            <p><a href="/certificates" className="text-white text-decoration-none">Certificates</a></p>
                            <p><a href="/contact" className="text-white text-decoration-none">Contact</a></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p><a href="/Product1" className="text-white text-decoration-none">Pooja Item</a></p>
                            <p><a href="/Product2" className="text-white text-decoration-none">Spices</a></p>
                            <p><a href="/Product3" className="text-white text-decoration-none">Rice </a></p>
                            <p><a href="/Product4" className="text-white text-decoration-none">Flour</a></p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-3 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="bi bi-geo-alt-fill me-2"></i> Chennai, India</p>
                            <p><i className="bi bi-envelope-fill me-2"></i> support@vaanvayal.com</p>
                            <p><i className="bi bi-telephone-fill me-2"></i> +91 98765 43210</p>
                            <p><i className="bi bi-printer-fill me-2"></i> +91 98765 43211</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center py-3 mt-3 border-top border-secondary">
                © 2025 Copyright:
                <a className="text-white fw-bold ms-1" href="/">vaanvayal.com</a>
            </div>
        </footer>
    );
}

export default Footer;
