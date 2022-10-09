import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Lienhe extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Bài viết</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Trang chủ </a>
                                    <span>Bài viết</span>
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

export default Lienhe;