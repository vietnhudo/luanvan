import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

class Trangchu extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 d-none d-lg-block">
                                <a className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', marginTop: '-1px', padding: '0 30px', backgroundColor: "#006666" }}>
                                    <h6 className="m-0">Danh mục</h6>
                                    <i className="fa fa-bars" />
                                </a>
                                <nav className="collapse p-3 border border-top-0 " id="navbar-vertical">
                                    <div className="w-100 " style={{ height: '300px' }}>
                                        <li><Link to={"/sach"} style={{ color: "#000" }}>Sách giáo khoa</Link></li>
                                        <li><Link to={"/sach"} style={{ color: "#000" }}>Sách thiếu nhi</Link></li>
                                        <li><Link to={"/sach"} style={{ color: "#000" }} >Tâm lý - Kỹ năng</Link></li>
                                        <li><Link to={"/sach"} style={{ color: "#000" }}>Tiểu thuyết</Link></li>
                                    </div>
                                </nav>
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
                                <div className="hero__item set-bg" style={{ backgroundImage: "url(img/slide-banner-1.jpg)" }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <Carousel autoPlay='true' infiniteLoop='true' >
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " style={{ backgroundImage: "url(img/categories/cat-4.jpg)" }}>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src="img/banner_slider_2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src="img/banner_slider_3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="featured spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Sách nổi bật</h2>
                                </div>
                                <div className="featured__controls">
                                    <ul>
                                        <li className="active" data-filter="*">Tất cả</li>
                                        <li data-filter=".oranges">Sách thiếu nhi</li>
                                        <li data-filter=".fresh-meat">Tâm lý</li>
                                        <li data-filter=".vegetables">Kinh doanh</li>
                                        <li data-filter=".fastfood">Sách giáo khoa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row featured__filter">
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" style={{ backgroundImage: "url(img/sach2.jpg)" }}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-eye" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Người Thông Minh Học Tập Như Thế Nào</a></h6>
                                        <h5>108.000 đ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" style={{ backgroundImage: "url(img/sach3.jpg)" }}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-eye" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Naruto - Tập 20</a></h6>
                                        <h5>22.000 đ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" style={{ backgroundImage: "url(img/sach4.jpg)" }}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-eye" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">100 Cách Sống Hạnh Phúc</a></h6>
                                        <h5>200.000 đ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" style={{ backgroundImage: "url(img/sach1.jpg)" }}>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-eye" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><a href="#">Tony Buổi Sáng - Cà Phê Cùng Tony</a></h6>
                                        <h5>81.000 đ</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="from-blog spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title from-blog__title">
                                    <h2>Bài viết mới nhất</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="img/blog1.jpg" alt="" />
                                    </div>
                                    <div className="blog__item__text_1">
                                        {/* <ul>
                                            <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                            <li><i className="fa fa-comment-o" /> 5</li>
                                        </ul> */}
                                        <h5><a href="#">THÁNG PHÁI ĐẸP: TỎA SÁNG VẺ ĐẸP, NHẬN NGÀN QUÀ TẶNG</a></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="img/blog2.jpg" alt="" />
                                    </div>
                                    <div className="blog__item__text_1">
                                        <h5><a href="#">Chỉ còn 5 ngày để săn sale Siêu khuyến mãi, Mừng lễ lớn</a></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <img src="img/blog3.jpg" alt="" />
                                    </div>
                                    <div className="blog__item__text_1">
                                        <h5><a href="#">NHÂN VĂN - VNPAY KHAO LỚN, QUÉT MÃ QRBOOKNV GIẢM NGAY 20K</a></h5>
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
export default Trangchu;