import React from 'react';
import Logo from '../../images/logo-1.png';

function Footer() {
    return (
        <footer className="text-white" style={{ backgroundColor: '#f7e0a1ff' }}>
            <section className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
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

            <section className="pt-3">
                <div className="container-fluid text-start text-md-start px-3">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-2">
                            <img src={Logo} alt="Company Logo" height="80" className="mb-3" />
                            <p>
                                We are committed to offering the best quality organic and sustainable products.
                                Explore our range and experience nature at its finest.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-1 col-xl-2 mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">Quick Links</h6>
                            <p><a href="/" className="text-white text-decoration-none">Home</a></p>
                            <p><a href="/about" className="text-white text-decoration-none">About</a></p>
                            <p><a href="/globalbuyers" className="text-white text-decoration-none">Global Buyers</a></p>
                            <p><a href="/contact" className="text-white text-decoration-none">Contact</a></p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">Products</h6>
                            <p><a href="/Product1" className="text-white text-decoration-none">Pooja Item</a></p>
                            <p><a href="/Product2" className="text-white text-decoration-none">Spices</a></p>
                            <p><a href="/Product3" className="text-white text-decoration-none">Rice </a></p>
                            <p><a href="/Product4" className="text-white text-decoration-none">Flour</a></p>
                        </div>

                        <div className="col-md-5 mb-2">
                            
                            <div className="row">
                                {/* Address */}
                                <div className="col-12 col-md-6 mb-2">
                                    <h6 className="text-uppercase fw-bold mb-2">Address</h6>
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        <div className="d-block align-items-start">
                                        <strong>VAAN VAYAL ENTERPRISES <br/> PRIVATE LIMITED</strong> <br/>
                                        <span>5/199, Mugappair East<br />Chennai - 600 037</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="col-12 col-md-4 mb-2">
                                    <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-telephone-fill me-2"></i>
                                        <span>+91 93427 03670</span>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-envelope-fill me-2"></i>
                                        <span>info@vaanvayal.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="text-center py-3 mt-3 border-top border-secondary">
                © 2025 Copyright
                <a className="text-white fw-bold ms-1" href="/">vaanvayal.com</a>
            </div>
        </footer>
    );
}

export default Footer;
