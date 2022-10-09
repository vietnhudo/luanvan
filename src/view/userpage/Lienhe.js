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
                                <h2>Liên hệ</h2>
                                <div className="breadcrumb__option">
                                    <a href="./index.html">Trang chủ </a>
                                    <span>Liên hệ</span>
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
                                <h2>Liên hệ</h2>
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
                                <textarea placeholder="Your message" defaultValue={""} />
                                <button type="submit" className="site-btn">Liên hệ</button>
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

export default Lienhe;