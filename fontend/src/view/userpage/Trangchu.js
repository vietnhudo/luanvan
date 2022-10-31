import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import callApi from '../api/callApi';

class Trangchu extends Component {
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
            <Link to={`/chitietsach/${sachs._id}`} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                <div className="featured__item">
                    <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${sachs.hinh})` }}>
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                            <li><Link to={`/chitietsach/${sachs._id}`} ><i className="fa fa-eye" /></Link></li>
                            <li><Link to={"/giohang"}><i className="fa fa-shopping-cart" /></Link></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">{(sachs.ten)}</a></h6>
                        <h5>{(sachs.gia)} đ</h5>
                    </div>
                </div>
            </Link>
        ));
        return sach;
    }

    render() {
        var { sach } = this.state;
        return (
            <div>
                <Header />
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
                                        <form action="#">
                                            <input type="text" placeholder="What do yo u need?" />
                                            <button type="submit" className="site-btn">TÌM KIẾM</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item set-bg" style={{ backgroundImage: "url(img/slide-banner-1.jpg)", width: "100%" }}>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <Carousel autoPlay='true' infiniteLoop='true' >
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__item ">
                                    <img src='img/quangcao1.jpg' />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " >
                                    <img src='img/quangcao2.jpg' />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " >
                                    <img src='img/quangcao3.jpg' />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " >
                                    <img src='img/quangcao4.jpg' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__item ">
                                    <img src='img/quangcao1.jpg' />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " >
                                    <img src='img/quangcao2.jpg' />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " >
                                    <img src='img/quangcao3.jpg' />
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="categories__item " >
                                    <img src='img/quangcao4.jpg' />
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <section className="hero">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                                    <h3 className="m-0 mr-3"> <img src='img/icon1.jpg' /> </h3>
                                    <h5 className="font-weight-bold m-0">Hoàn tiền <br></br> 101%</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                                    <h3 className="m-0 mr-3"> <img src='img/icon2.jpg' /> </h3>
                                    <h5 className="font-weight-bold m-0">Đổi trả<br></br> 07 ngày</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                                    <h3 className="m-0 mr-3"> <img src='img/icon3.jpg' /> </h3>
                                    <h5 className="font-weight-bold m-0">Tích lũy<br></br> NV-POINT</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                                    <h3 className="m-0 mr-3"> <img src='img/icon4.jpg' /> </h3>
                                    <h5 className="font-weight-bold m-0">Chương trình<br></br> ưu đãi</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Danh mục phổ biến được người dùng quan tâm</h2>
                                </div>
                                <div className="featured__controls">
                                    <ul>
                                        <li className="active" data-filter="*">Tất cả</li>
                                        <li data-filter=".oranges">Sách thiếu nhi</li>
                                        <li data-filter=".fresh-meat">Tâm lý</li>
                                        <li data-filter=".vegetables">Kinh doanh</li>
                                        <li data-filter=".fastfood">Sách giáo khoa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {sach.length !== 0 ? (
                            <>
                                <div className="row featured__filter">
                                    {this.renderSach()}
                                </div>
                            </>
                        ) : (
                            <><h3 className='p-4 m-2'>Không có dữ liệu.....</h3></>
                        )}
                    </div>
                </section>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src="img/banner_slider_2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="banner__pic">
                                    <img src="img/banner_slider_3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="from-blog spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title from-blog__title">
                                    <h2>Bài viết mới nhất</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <Link to={"/chitietbaiviet"}><img src="img/blog1.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog__item__text_1">
                                        {/* <ul>
                                            <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                            <li><i className="fa fa-comment-o" /> 5</li>
                                        </ul> */}
                                        <h5><Link to={"/chitietbaiviet"}>THÁNG PHÁI ĐẸP: TỎA SÁNG VẺ ĐẸP, NHẬN NGÀN QUÀ TẶNG</Link></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <Link to={"/chitietbaiviet"}> <img src="img/blog2.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog__item__text_1">
                                        <h5><Link to={"/chitietbaiviet"}>Chỉ còn 5 ngày để săn sale Siêu khuyến mãi, Mừng lễ lớn</Link></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="blog__item">
                                    <div className="blog__item__pic">
                                        <Link to={"/chitietbaiviet"}><img src="img/blog3.jpg" alt="" /></Link>
                                    </div>
                                    <div className="blog__item__text_1">
                                        <h5><Link to={"/chitietbaiviet"}>NHÂN VĂN - VNPAY KHAO LỚN, QUÉT MÃ QRBOOKNV GIẢM NGAY 20K</Link></h5>
                                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                    </div>
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
export default Trangchu;