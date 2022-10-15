import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Thanhtoan extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Thanh toán</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ </Link>
                                        <span>Thanh toán</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="checkout spad">
                    <div className="container">
                        <div className="checkout__form">
                            <h4>Thông tin giao hàng</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-8 col-md-6">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="checkout__input">
                                                    <p>Họ và tên<span>*</span></p>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout__input">
                                            <p>Địa chỉ<span>*</span></p>
                                            <input type="text" placeholder="Nhập địa chỉ cụ thể" className="checkout__input__add" />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="checkout__input">
                                                    <p>Số điện thoại<span>*</span></p>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="checkout__input">
                                                    <p>Email<span>*</span></p>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout__input">
                                            <p>Ghi chú<span>*</span></p>
                                            <input type="text" placeholder="Thêm ghi chú cho đơn hàng" />
                                        </div>
                                        <div className="float-left">
                                            <label >
                                                Bạn đã có tài khoản?<Link to={'/dangnhap'} style={{ color: "blueviolet" }}>  Đăng nhập</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="checkout__order">
                                            <h4>Thông tin đơn hàng</h4>
                                            <div className="checkout__order__products">Sản phẩm <span>Tổng cộng</span></div>
                                            <ul>
                                                <li>Tony cùng CAFE <span>60.000 vnđ</span></li>
                                            </ul>
                                            <div className="checkout__order__total">Thành tiền <span>60.000 vnđ</span></div>
                                            <div className="checkout__input__checkbox">
                                                <label htmlFor="payment">
                                                    Thanh toán khi nhận hàng
                                                    <input type="checkbox" id="payment" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                            <button type="submit" className="site-btn">Thanh toán</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Thanhtoan;