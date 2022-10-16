import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Giohang extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Giỏ hàng của bạn</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ</Link>
                                        <span>Giỏ hàng của bạn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="shoping-cart spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="shoping__product">Sản phẩm</th>
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Tổng cộng</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="shoping__cart__item">
                                                    <img style={{ width: "200px", height: "200px" }} src="img/sach1.jpg" alt="" />
                                                    <h5>Tony Buổi Sáng - Cà Phê Cùng Tony</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    60.000
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <input type="text" defaultValue={1} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    60.000
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span style={{ color: "red" }} className="fa fa-trash-o" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__btns">
                                    <Link to={'/sach'} className="primary-btn cart-btn float-right" style={{ backgroundColor: "#006666", color: "#ffffff" }}>Tiếp tục mua hàng</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shoping__continue">
                                    <div className="shoping__discount">
                                        <h5>Mã giảm giá</h5>
                                        <form action="#">
                                            <input type="text" placeholder="Nhập mã giảm giá" />
                                            <button style={{ backgroundColor: "#006666", color: "#ffffff" }} type="submit" className="site-btn">Sử dụng</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shoping__checkout">
                                    <h5>Tổng cộng</h5>
                                    <ul>
                                        <li>Tạm tính <span>60.000 vnđ</span></li>
                                        <li>Phí vận chuyển <span>18.000 vnđ</span></li>
                                    </ul>
                                    <Link to={'/thanhtoan'} className="primary-btn">Thanh toán</Link>
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

export default Giohang;