import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess } from '../../redux/khachhang';
import callApi from '../api/callApi';
import React, { useState } from 'react';
import { timkiem } from '../../redux/cart'
const Header = () => {

    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ten, setTen] = useState('');
    const [ddssach, setDsSach] = useState([]);
    const carts = useSelector((state) => state.cart.cart);

    const TimKiem = (e) => {
        e.preventDefault();
        callApi(`api/sach/timkiem/${ten}`, "GET", null).then(res => {
            setDsSach(res.data.sach);
            dispatch(timkiem(res.data.sach));
        });
        
        navigate('/timkiem')
    }
    let soluong = 0;

    carts?.forEach((item) => {
        soluong += item.qty;
    });

    
    return (
        <div>
            <header className="header">
                <div className="header__top" style={{ backgroundColor: "#398282" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6" >
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

                                    {user ? (
                                        <>
                                            <div className="header__top__right__auth" onClick={() => dispatch(logOutSuccess())}><Link to={"/dangnhap"} replace className="dropdown-item"><span><i className="fa fa-user" />{user.username}</span></Link></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="header__top__right__auth">
                                                <Link to={"/dangnhap"} replace className="dropdown-item"><i className="fa fa-user" />Đăng nhập</Link>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <Link to={'/'}><img src="img/logo_vietstore.png" alt="" /></Link>
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
                                    <li><Link to={"/giohang"}><i className="fa fa-shopping-bag" /> <span>{soluong}</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
                <section className="hero">
                    <div className="container" style={{ width: "100%" }}>
                        <div className="row">
                            <div className="col-lg-3 ">
                                <a className="btn shadow-none d-flex align-items-center justify-content-between text-white" data-toggle="collapse" href="#navbar-vertical" style={{ height: '53px', marginTop: '-1px', backgroundColor: "#006666" }}>
                                    <h6 className="m-0 font-weight-bold" style={{ textTransform: "uppercase", display: "inline-block" }}>DANH MỤC</h6>
                                    <i className="fa fa-bars" />
                                </a>
                                <nav className=" collapse p-3 border border-top-0 " id="navbar-vertical" style={{ overflow: "hidden", zIndex: "99999", position: "relative" }}>
                                    <div className="hi" style={{ height: 'auto', overflow: "hidden", position: "relative" }}>
                                        <p><Link to={"/sach"} style={{ color: "#000" }}>Sách giáo khoa</Link></p>
                                        <p><Link to={"/sach"} style={{ color: "#000" }}>Sách thiếu nhi</Link></p>
                                        <p><Link to={"/sach"} style={{ color: "#000" }} >Tâm lý - Kỹ năng</Link></p>
                                        <p><Link to={"/sach"} style={{ color: "#000" }}>Tiểu thuyết</Link></p>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-lg-9">
                                <div className="hero__search">
                                    <div className="hero__search__form">
                                        <form onSubmit={TimKiem}>
                                            <input type="text" placeholder="Tìm kiếm..." value={ten} onChange={(e) => setTen(e.target.value)} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Header;
