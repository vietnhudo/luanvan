import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../api/callApi';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Sach extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sach: [],
        };
    }

    componentDidMount() {
        callApi("api/sach", "GET", null).then((res) => {
            this.setState({
                sach: res.data.sach,
            });
        });
    }

    renderSach = () => {
        let sach = this.state.sach.map((sachs, index) => (
            <div className="row">
                <Link to={`/chitietsach/${sachs._id}`} className="col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${sachs.hinh})` }}>
                            <ul className="product__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                <li><Link to={`/chitietsach/${sachs._id}`} ><i className="fa fa-eye" /></Link></li>
                                <li><Link to={"/giohang"}><i className="fa fa-shopping-cart" /></Link></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">{(sachs.ten)}</a></h6>
                            <h5>{(sachs.gia)} đ</h5>
                        </div>
                    </div>
                </Link>
            </div>
        ));
        return sach;
    }

    render() {
        var { sach } = this.state;
        return (
            <div>
                <Header />
                {/* <section className="hero hero-normal">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="hero__categories">
                                    <div className="hero__categories__all">
                                        <i className="fa fa-bars" />
                                        <span>Danh mục</span>
                                    </div>
                                    <ul>
                                        <li><a href="#">Sách giáo khoa</a></li>
                                        <li><a href="#">Sách thiếu nhi</a></li>
                                        <li><a href="#">Tâm lý - Kỹ năng</a></li>
                                        <li><a href="#">Tiểu thuyết</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="hero__search">
                                    <div className="hero__search__form">
                                        <form action="#">
                                            <input type="text" placeholder="What do yo u need?" />
                                            <button type="submit" className="site-btn">SEARCH</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Sản phẩm</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ </Link>
                                        <span>Sản phẩm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-5">
                                <div className="sidebar">
                                    <div className="sidebar__item">
                                        <h4>Danh mục</h4>
                                        <ul>
                                            <li><a href="#">Sách giáo khoa</a></li>
                                            <li><a href="#">Sách thiếu nhi</a></li>
                                            <li><a href="#">Tâm lý - Kỹ năng</a></li>
                                            <li><a href="#">Tiểu thuyết</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {sach.length !== 0 ? (
                                <>
                                    <div className="col-lg-9 col-md-7">{this.renderSach()}</div>
                                </>
                            ) : (
                                <><h3 className='p-4 m-2'>Không có dữ liệu.....</h3></>
                            )}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Sach;