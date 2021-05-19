import React, { Component } from "react";
import Slider from "react-slick";
import Title from "./Title"

export default class CarouselFeatured extends Component {
    render() {
        const title = {
            text: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ame"
        }
        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };
        return (
            <section className="section-best-estate"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Title title={title.text} description={title.description} />
                            <Slider {...settings}>
                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className="best-estate-state bg-green">
                                                Kiralık
                                            </div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><a href="#">Lorem Ipsum</a></h4>
                                            <span><a href="#">Lorem Ipsum</a></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">
                                                $650
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className="best-estate-state bg-crimson">
                                                Satılık
                                            </div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><a href={title.text}>Lorem Ipsum</a></h4>
                                            <span><a href={title.text}>Lorem Ipsum</a></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">
                                                $650
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className="best-estate-state bg-green">
                                               Kiralık
                                            </div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><a href={title.text}>Lorem Ipsum</a></h4>
                                            <span><a href={title.text}>Lorem Ipsum</a></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">
                                                $650
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className="best-estate-state bg-crimson">
                                                Satılık
                                            </div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><a href={title.text}>Lorem Ipsum</a></h4>
                                            <span><a href={title.text}>Lorem Ipsum</a></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">
                                                $650
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="best-estate">
                                    <div className="best-estate-item">
                                        <div className="best-estate-img-area">
                                            <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                                            <div className="best-estate-state bg-green">
                                                Kiralık
                                            </div>
                                        </div>
                                        <div className="best-estate-content">
                                            <h4><a href={title.text}>Lorem Ipsum</a></h4>
                                            <span><a href={title.text}>Lorem Ipsum</a></span>
                                        </div>
                                        <div className="best-estate-features">
                                            <div className="d-flex">
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>3 Beds</span>
                                                </div>
                                                <div className="best-estate-feature">
                                                    <i className="fas fa-check-circle"></i>
                                                    <span>2 Bathrooms</span>
                                                </div>
                                            </div>
                                            <h5 className="best-estate-price">
                                                $650
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}