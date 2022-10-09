import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__left">
                                        <ul>
                                            <li><i className="fa fa-envelope" /> vietstrore@gmail.com</li>
                                            <li>Chào mừng bạn đến với VietStore</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="header__top__right">
                                        <div className="header__top__right__social">
                                            <a href="#"><i className="fa fa-facebook" /></a>
                                            <a href="#"><i className="fa fa-twitter" /></a>
                                            <a href="#"><i className="fa fa-linkedin" /></a>
                                            <a href="#"><i className="fa fa-pinterest-p" /></a>
                                        </div>
                                        <div className="header__top__right__auth">
                                            <Link to={"/dangnhap"} replace className="dropdown-item"><i className="fa fa-user" />Đăng nhập</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="header__logo">
                                    <a href="./index.html"><img src="img/logo_vietstore.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <nav className="header__menu">
                                    <ul>
                                        <li className="active"><Link to={"/"} replace className="dropdown-item">Trang chủ</Link></li>
                                        <li><Link to={"/sach"} replace className="dropdown-item">Sản phẩm</Link></li>
                                        <li><Link to={"/baiviet"} replace className="dropdown-item">Bài viết</Link></li>
                                        <li><Link to={"/lienhe"} replace className="dropdown-item">Liên hệ</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-3">
                                <div className="header__cart">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="humberger__open">
                            <i className="fa fa-bars" />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;