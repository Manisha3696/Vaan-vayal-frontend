import React from 'react'
import '../../Css/Style.css'
import banner from '../../images/Contact/breadcrumb-bg.jpg'
import { Link } from 'react-router-dom'
import Product1 from '../../images/About/flour.jpg'
import Product2 from '../../images/About/oil.jpg'
import Product3 from '../../images/About/rice.jpg'
import Product4 from '../../images/About/jaggery.jpg'
import Product5 from '../../images/About/spices.jpg'
import abtBanner from '../../images/About/ingredient-bags-full-flour.jpg'

function About() {

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-6 pt-5 mt-5 responsive-abt-banner">
              <h2 className="display-1 ls-1"><span className="fw-bold text-custom">Organic</span> Products at your <span className="fw-bold">Doorsteps</span></h2>
              <p className="fs-4">Bringing nature's purity from farm to your home.</p>
              <div className="row my-5">
                <div className="col responsive-abt-col">
                  <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">15+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Handpicked Organic Products</p></div>
                  </div>
                </div>
                <div className="col responsive-abt-col">
                  <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">50+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Happy Customers (and growing)</p></div>
                  </div>
                </div>
                <div className="col responsive-abt-col">
                  <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">10+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Partnering Farmer Networkss</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 d-flex align-item-center p-5'>
              <img src={abtBanner} alt='Abt-banner' className='about-img-style' />
            </div>
          </div>
        </div>
      </section>
      <div className="abt-section mt-75 mb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                {/* <p className="top-sub">Since Year 2025</p> */}
                <h2 style={{ textAlign: "start" }}>We are <span className="green-text">Vaan Vayal</span></h2>
                <p>Vaan Vayal is your trusted source for authentic, organic, and natural food products. With a strong commitment to purity and quality, we ensure that every item we deliver is fresh, safe, and packed with nutritional value.</p>
                <p>From farm-fresh staples to traditional Indian goods, our goal is to connect people with wholesome food that supports a healthy and sustainable lifestyle.</p>
                <div className='d-flex justify-content-start'>
                  <Link to='/contact'>
                    <button className='btn btn-warning mt-2 p-2' style={{ color: "black", background: "#fff3cd", border: "1px solid #000" }}>Having Queries</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section" style={{ backgroundColor: "#fff3cd" }}>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div
              className="col-md-7 heading-section text-center"
            >
              <span className="subheading">Our Vision</span>
              <p>At Vaan Vayal, our vision is to reconnect people with the purity of nature by delivering fresh, organic, and chemical-free food straight from local farms to homes. We aim to support sustainable farming, empower farmers, and make healthy living a simple everyday choice for every household.</p>
            </div>
          </div>

          <div className="row no-gutters ftco-services justify-content-center g-5">
            <div className="col-lg-4 text-center d-flex justify-content-center align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                  <span className="fas fa-shipping-fast"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <span>On order over $100</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex justify-content-center align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 d-flex justify-content-center align-items-center mb-2">
                  <span className="fas fa-leaf"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Always Fresh</h3>
                  <span>Product well package</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex justify-content-center align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 d-flex justify-content-center align-items-center mb-2">
                  <span className="fas fa-award"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Superior Quality</h3>
                  <span>Quality Products</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex justify-content-center align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 d-flex justify-content-center align-items-center mb-2">
                  <span className="fas fa-headset"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Support</h3>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex justify-content-center align-self-stretch ftco-animate">
              <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 d-flex justify-content-center align-items-center mb-2">
                  <span className="fas fa-headset"></span>
                </div>
                <div className="media-body">
                  <h3 className="heading">Sustainably Sourced</h3>
                  <span>Eco-friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container-lg">
          <h2 className="my-4">People are also looking for</h2>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Spices</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Pickles</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Flour</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Masala</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Oil</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Rice</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Snacks</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Soya</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Salt</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Appalam</a>
          <a href="/" className="btn me-2 mb-2" style={{ backgroundColor: "#e6f3e6", color: "#000" }}>Jaggery</a>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            {/* Image 1 */}
            <div className="col-md-4 mb-5">
              <img src={Product1} alt="Image-1" className="img-fluid1 rounded shadow" />
            </div>
            {/* Image 2 */}
            <div className="col-md-4 mb-5">
              <img src={Product2} alt="Image-2" className="img-fluid1 rounded shadow" />
            </div>
            {/* Image 3 */}
            <div className="col-md-4 mb-5">
              <img src={Product3} alt="Image-3" className="img-fluid1 rounded shadow" />
            </div>
            {/* Image 4 */}
            <div className="col-md-4 mb-5">
              <img src={Product4} alt="Image-4" className="img-fluid1 rounded shadow" />
            </div>
            {/* Image 5 */}
            <div className="col-md-4 mb-5">
              <img src={Product5} alt="Image-5" className="img-fluid1 rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      <div className="feature-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="featured-text">
                <h2 className="pb-3">Why <span className="green-text">Vaan Vayal</span></h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 mb-4 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-shipping-fast"></i>
                      </div>
                      <div className="content">
                        <p>At Vaan Vayal, we are committed to bringing you nature’s finest with authenticity and care.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div className="list-box d-flex">
                      <div className="list-icon">
                        <i className="fas fa-money-bill-alt"></i>
                      </div>
                      <div className="content">
                        <p>Our products are grown and sourced using sustainable and traditional methods that honor the earth.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mb-5 mb-md-5">
                    <div class="list-box d-flex">
                      <div class="list-icon">
                        <i class="fas fa-briefcase"></i>
                      </div>
                      <div class="content">
                        <p>Every item reflects our dedication to purity, freshness, and trust.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="list-box d-flex">
                      <div class="list-icon">
                        <i class="fas fa-sync-alt"></i>
                      </div>
                      <div class="content">
                        <p>Choose Vaan Vayal for a wholesome experience rooted in quality and tradition.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About