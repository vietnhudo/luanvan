import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Dangnhap extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundImage: "url(img/breadcrumb.jpg)" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Đăng nhập</h2>
                                    <div className="breadcrumb__option">
                                        <a href="./index.html">Trang chủ </a>
                                        <span>Đăng nhập</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="contact-form spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Đăng nhập</h2>
                                </div>
                            </div>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <input type="emiail" placeholder="Email" />
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="site-btn">Đăng nhập</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Dangnhap;