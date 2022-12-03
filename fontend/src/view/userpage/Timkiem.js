import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { them_giohang } from '../../redux/cart';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import util from '../../util/util';

const TimKiem = () => {
    const sach = useSelector((state) => state.cart.sach);
    const dispatch = useDispatch();
    return (
        <div>
            <Header />
            <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Sản phẩm tìm kiếm</h2>
                                <div className="breadcrumb__option">
                                    <Link to={'/'}>Trang chủ </Link>
                                    <Link to={'/sach'}>Sản Phẩm </Link>
                                    <span>Tìm kiếm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-3 col-md-5">
                                <div className="sidebar">
                                    <label for="car1"> <b>Danh mục:</b> &nbsp;</label>
                                    <select onChange={(e) => this.handleChang(e)} className="text-center mb-4 cars" style={{ height: '30px' }} id="car1">
                                        <option className='text-left' value={theloaisachs._id}>
                                            {theloaisachs.ten}
                                        </option>
                                    </select>
                                    <label for="car2"> <b>Nhà xuất bản:</b> &nbsp;</label>
                                    <select onChange={(e) => this.handleChangNhaXuatBan(e)} className="text-center mb-4 cars" style={{ height: '30px' }} id="car2">
                                        <option className='text-left' value={nhaxuatbans._id}>
                                            {nhaxuatbans.tennxb}
                                        </option>
                                    </select>
                                </div>
                            </div> */}
                        {sach.length !== 0 ? (
                            <>
                                {sach.map((sachs, index) => (
                                    <div className="col-lg-9 col-md-7">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="product__item">
                                                    <div className='product-sale'>
                                                        <span>{sachs.giamgia}%</span>
                                                    </div>
                                                    <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${sachs.hinh})` }}>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                            <li><Link to={`/chitietsach/${sachs._id}`} ><i className="fa fa-eye" /></Link></li>
                                                            <li><Link onClick={() => dispatch(them_giohang(sachs))}><i className="fa fa-shopping-cart" /></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6><a href="#">{(sachs.ten)}</a></h6>
                                                        <del className='float-center' style={{ padding: '10px', color: '#b1b1b1' }}>{util(Math.floor((sachs.gia) / (1 - ((sachs.giamgia) / 100))))}</del>
                                                        <span><b>{util(sachs.gia)}</b></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
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

export default TimKiem;



