import React, { useState } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginKhachHang } from '../../action/reducers/api';

const Dangnhap = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDangNhap = (e) => {
        e.preventDefault();
        const newKhachHang = {
            username: username,
            password: password
        };
        loginKhachHang(newKhachHang, dispatch, navigate);

    };
    return (
        <div>
            <Header />
            <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Đăng nhập</h2>
                                <div className="breadcrumb__option">
                                    <Link to={'/'}>Trang chủ </Link>
                                    <span>Đăng nhập</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-form spad">
                <div className="container">
                    <div className="row" style={{ position: "relative" }}>
                        <div className="col-lg-6" style={{ backgroundColor: "#fafafa", padding: "50px", border: "1px solid #e5e5e5", float: "left" }}>
                            <div className="contact__form__title">
                                <h2>Đăng nhập</h2>
                            </div>
                            <form onSubmit={handleDangNhap}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <input type="username" placeholder="Tên khách hàng" onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <button type="submit" className="site-btn"><i className='fa fa-sign-in'></i> Đăng nhập</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6" style={{ backgroundColor: "#fafafa", padding: "50px", border: "1px solid #e5e5e5", float: "right" }}>
                            <div className="contact__form__title">
                                <h2>Tạo tài khoản</h2>
                            </div>
                            <h5>Đăng kí tài khoản miễn phí. Thủ tục đăng kí nhanh chóng và đơn giản. Nó cho phép bạn có thể đặt hàng từ cửa hàng của chúng tôi. Để bắt đầu mua sắm bấm đăng ký. </h5>
                            <br></br>
                            <div className="col-lg-12 text-center">
                                <Link to={"/dangky"} type="submit" className="site-btn-1"><i className='fa fa-user-plus'></i> Tạo tài khoản</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dangnhap;