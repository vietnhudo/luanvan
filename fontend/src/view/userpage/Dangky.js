import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Dangky extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Đăng ký</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ </Link>
                                        <span>Đăng ký</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="contact-form spad">
                    <div className="container">
                        <div className="row" style={{ backgroundColor: "#fafafa", padding: "50px", border: "1px solid #e5e5e5" }}>
                            <div className="col-lg-12">
                                <div className="contact__form__title">
                                    <h2>Đăng ký </h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <input type="text" placeholder="Address" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <input type="phone" placeholder="Phone number" />
                                        </div>
                                        <div className="col-lg-12 text-center">
                                            <button type="submit" className="site-btn"><i className='fa fa-sign-in'></i> Đăng ký</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Dangky;