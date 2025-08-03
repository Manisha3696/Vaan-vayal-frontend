import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import person from '../images/About/person_1.jpg'

const TestimonialCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <section className="ftco-section testimony-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center">
                        <span className="subheading">Testimony</span>
                        <h2 className="mb-4">Our satisfied customer says</h2>
                        <p>Hear from our early customers.</p>
                    </div>
                </div>

                <Slider {...settings}>
                    <div className="item">
                        <div className="testimony-wrap p-4 pb-5">
                            <div
                                className="user-img mb-5"
                                style={{ backgroundImage: `url(${person})` }}
                            >
                                <span className="quote d-flex align-items-center justify-content-center">
                                    <i className="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-5 pl-4 line">
                                    Excellent fresh produce. Great service!
                                </p>
                                <p className="name">Garreth Smith</p>
                                <span className="position">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimony-wrap p-4 pb-5">
                            <div
                                className="user-img mb-5"
                                style={{ backgroundImage: `url(${person})` }}
                            >
                                <span className="quote d-flex align-items-center justify-content-center">
                                    <i className="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-5 pl-4 line">
                                    Excellent fresh produce. Great service!
                                </p>
                                <p className="name">Garreth Smith</p>
                                <span className="position">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimony-wrap p-4 pb-5">
                            <div
                                className="user-img mb-5"
                                style={{ backgroundImage: `url(${person})` }}
                            >
                                <span className="quote d-flex align-items-center justify-content-center">
                                    <i className="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-5 pl-4 line">
                                    Excellent fresh produce. Great service!
                                </p>
                                <p className="name">Garreth Smith</p>
                                <span className="position">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimony-wrap p-4 pb-5">
                            <div
                                className="user-img mb-5"
                                style={{ backgroundImage: `url(${person})` }}
                            >
                                <span className="quote d-flex align-items-center justify-content-center">
                                    <i className="fas fa-quote-left"></i>
                                </span>
                            </div>
                            <div className="text text-center">
                                <p className="mb-5 pl-4 line">
                                    Excellent fresh produce. Great service!
                                </p>
                                <p className="name">Garreth Smith</p>
                                <span className="position">Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
