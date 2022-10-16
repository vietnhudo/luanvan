import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Chitietbaiviet extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Chi tiết bài viết</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ </Link>
                                        <span>Chi tiết bài viết</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="blog__details__text" style={{ width: "100%" }}>
                                    <h3>The corner window forms a place within a place that is a resting point within the large
                                        space.</h3>
                                    <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                                        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                                        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                                        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                                        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                                        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        The study area is located at the back with a view of the vast nature. Together with the other
                                        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                                        the components. The use of materials seeks connection to the main house, the adjacent
                                        stables</p>
                                    <img style={{ width: "100%" }} src="img/blog1.jpg" alt="" />
                                    <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                                        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                                        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                                        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                                        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                                        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        The study area is located at the back with a view of the vast nature. Together with the other
                                        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                                        the components. The use of materials seeks connection to the main house, the adjacent
                                        stables</p>
                                    <img style={{ height: "50px", float: "right" }} src='img/share.jpg'></img>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="blog__sidebar__item">
                                    <h4>Bài viết liên quan</h4>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="blog__item">
                                                <div className="blog__item__pic">
                                                    <img src="img/blog1.jpg" alt="" />
                                                </div>
                                                <div className="blog__item__text">
                                                    <h5><a href="#">Cooking tips make cooking simple</a></h5>
                                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="blog__item">
                                                <div className="blog__item__pic">
                                                    <img src="img/blog2.jpg" alt="" />
                                                </div>
                                                <div className="blog__item__text">
                                                    <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="blog__item">
                                                <div className="blog__item__pic">
                                                    <img src="img/blog3.jpg" alt="" />
                                                </div>
                                                <div className="blog__item__text">
                                                    <h5><a href="#">Visit the clean farm in the US</a></h5>
                                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Chitietbaiviet;