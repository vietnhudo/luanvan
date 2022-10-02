import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Sach extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="hero hero-normal">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                            <div className="hero__categories">
                                    <div className="hero__categories__all">
                                        <i className="fa fa-bars" />
                                        <span>Danh mục</span>
                                    </div>
                                    <ul>
                                        <li><a href="#">Sách giáo khoa</a></li>
                                        <li><a href="#">Sách thiếu nhi</a></li>
                                        <li><a href="#">Tâm lý - Kỹ năng</a></li>
                                        <li><a href="#">Tiểu thuyết</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="hero__search">
                                    <div className="hero__search__form">
                                        <form action="#">
                                            <input type="text" placeholder="What do yo u need?" />
                                            <button type="submit" className="site-btn">SEARCH</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="breadcrumb-section set-bg" style={{ backgroundImage: "url(img/breadcrumb.jpg)" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Sản phẩm</h2>
                                    <div className="breadcrumb__option">
                                        <a href="./index.html">Trang chủ </a>
                                        <span>Sản phẩm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-5">
                                <div className="sidebar">
                                    <div className="sidebar__item">
                                        <h4>Danh mục</h4>
                                        <ul>
                                        <li><a href="#">Sách giáo khoa</a></li>
                                        <li><a href="#">Sách thiếu nhi</a></li>
                                        <li><a href="#">Tâm lý - Kỹ năng</a></li>
                                        <li><a href="#">Tiểu thuyết</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-7">
                                <div className="product__discount">
                                    <div className="row">
                                        <div className="product__discount__slider owl-carousel">
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg" style={{ backgroundImage: "url(img/product/discount/pd-1.jpg)" }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg" style={{ backgroundImage: "url(img/product/discount/pd-2.jpg)" }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Vegetables</span>
                                                        <h5><a href="#">Vegetables’package</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg" style={{ backgroundImage: "url(img/product/discount/pd-3.jpg)" }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Mixed Fruitss</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg" style={{ backgroundImage: "url(img/product/discount/pd-4.jpg)" }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg" style={{ backgroundImage: "url(img/product/discount/pd-5.jpg)" }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg" style={{ backgroundImage: "url(img/product/discount/pd-6.jpg)" }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/product/product-1.jpg)" }}>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><a href="#">Crab Pool Security</a></h6>
                                                <h5>$30.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/product/product-2.jpg)" }}>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><a href="#">Crab Pool Security</a></h6>
                                                <h5>$30.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/product/product-3.jpg)" }}>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><a href="#">Crab Pool Security</a></h6>
                                                <h5>$30.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Sach;