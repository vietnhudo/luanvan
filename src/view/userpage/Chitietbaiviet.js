import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Chitietbaiviet extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="blog-details-hero set-bg" style={{ backgroundImage: "url(img/blog/details/details-hero.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog__details__hero__text">
                                    <h2>The Moment You Need To Remove Garlic From The Menu</h2>
                                    <ul>
                                        <li>By Michael Scofield</li>
                                        <li>January 14, 2019</li>
                                        <li>8 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 order-md-1 order-2">
                                <div className="blog__sidebar">
                                    <div className="blog__sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <button type="submit"><span className="icon_search" /></button>
                                        </form>
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <h4>Categories</h4>
                                        <ul>
                                            <li><a href="#">All</a></li>
                                            <li><a href="#">Beauty (20)</a></li>
                                            <li><a href="#">Food (5)</a></li>
                                            <li><a href="#">Life Style (9)</a></li>
                                            <li><a href="#">Travel (10)</a></li>
                                        </ul>
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <h4>Recent News</h4>
                                        <div className="blog__sidebar__recent">
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-1.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-2.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-3.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <h4>Search By</h4>
                                        <div className="blog__sidebar__item__tags">
                                            <a href="#">Apple</a>
                                            <a href="#">Beauty</a>
                                            <a href="#">Vegetables</a>
                                            <a href="#">Fruit</a>
                                            <a href="#">Healthy Food</a>
                                            <a href="#">Lifestyle</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 order-md-1 order-1">
                                <div className="blog__details__text">
                                    <img src="img/blog1.jpg" alt="" />
                                    <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                        dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                                        aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                                        sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                                        Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                                        quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                                        feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                                    <h3>The corner window forms a place within a place that is a resting point within the large
                                        space.</h3>
                                    <p>The study area is located at the back with a view of the vast nature. Together with the other
                                        buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                                        the components. The use of materials seeks connection to the main house, the adjacent
                                        stables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog Details Section End */}
                {/* Related Blog Section Begin */}
                <section className="related-blog spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title related-blog-title">
                                    <h2>Các Bài Viết Liên Quan</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
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
                            <div className="col-lg-4 col-md-4 col-sm-6">
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
                            <div className="col-lg-4 col-md-4 col-sm-6">
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
                </section>
                <Footer />
            </div>
        );
    }
}

export default Chitietbaiviet;