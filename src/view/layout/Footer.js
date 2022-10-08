import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer__about">
                                    <div className="footer__about__logo">
                                        <a href="./index.html"><img src="img/logo_vietstore.png" alt="" /></a>
                                    </div>
                                    <ul>
                                        <li>Địa chỉ : 180 Cao Lỗ, Phường 4, Quận 8, TP.HCM</li>
                                        <li>Điện thoại: 0915997305</li>
                                        <li>Email: VietStore@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                                <div className="footer__widget">
                                    <h6>Thông tin</h6>
                                    <ul>
                                        <li><a href="#">Trang chủ</a></li>
                                        <li><a href="#">Sách</a></li>
                                        <li><a href="#">Liên hệ</a></li>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="footer__widget">
                                    <h6>Đăng ký nhận tin</h6>
                                    <form action="#">
                                        <input type="text" placeholder="Nhập email" />
                                        <button type="submit" className="site-btn">Đăng ký</button>
                                    </form>
                                    <div className="footer__widget__social">
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-instagram" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-pinterest" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer__copyright">
                                    <div className="footer__copyright__text"><p>
                                    Copyright © 2022. All Rights Reserved. VietStore <i className="fa fa-heart" aria-hidden="true" />
                                    </p></div>
                                    <div className="footer__copyright__payment"><img src="img/payment-item.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;