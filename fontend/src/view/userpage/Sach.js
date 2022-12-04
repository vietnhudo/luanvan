import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../api/callApi';
import { useDispatch } from 'react-redux';
import { them_giohang } from '../../redux/cart';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import util from '../../util/util';

class Sach extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sach: [],
            theloaisach: [],
            nhaxuatban: [],
            cart: [],
            chitiettacgia:[],
            tacgia:[],
        };
    }

    componentDidMount() {
        callApi("api/sach", "GET", null).then((res) => {
            this.setState({
                sach: res.data.sach,
            });
        });
        callApi("api/theloaisach", "GET", null).then((res) => {
            this.setState({
                theloaisach: res.data.theloaisach,
            });
        });
        callApi("api/nhaxuatban", "GET", null).then((res) => {
            this.setState({
                nhaxuatban: res.data.nhaxuatban,
            });
        });
        callApi("api/chitiettacgia", "GET", null).then((res) => {
            this.setState({
                chitiettacgia: res.data.chitiettacgia,
            });
        });
        callApi("api/tacgia", "GET", null).then((res) => {
            this.setState({
                tacgia: res.data.tacgia,
            });
        });

    }

    handleChang = (e) => {
        callApi(`api/sach/theloaisach/${e.target.value}`, "GET", null).then((res) => {
            this.setState({
                sach: res.data.sach,
            });
        });
    }
    handleChangNhaXuatBan = (e) => {
        callApi(`api/sach/nhaxuatban/${e.target.value}`, "GET", null).then((res) => {
            this.setState({
                sach: res.data.sach,
            })
        })
    }
    handleChangChiTietTacGia = (e) => {
        callApi(`api/chitiettacgia/tacgia/${e.target.value}`, "GET", null).then((res) => {
            this.setState({
                sach: res.data.chitiettacgia,
            })
        })
    }


    renderSach = () => {
        let sach = this.state.sach.map((sachs, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className='product-sale'>
                        <span>{sachs.giamgia}%</span>
                    </div>
                    <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${sachs.hinh})` }}>
                        <ul className="product__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                            <li><Link to={`/chitietsach/${sachs._id}`} ><i className="fa fa-eye" /></Link></li>
                            <li><Link onClick={() => this.props.dispatch(them_giohang(sachs))}><i className="fa fa-shopping-cart" /></Link></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">{(sachs.ten)}</a></h6>
                        <del className='float-center' style={{ padding: '10px', color: '#b1b1b1' }}>{util(Math.floor((sachs.gia) / (1 - ((sachs.giamgia) / 100))))}</del>
                        <span><b>{util(sachs.gia)}</b></span>
                    </div>
                </div>
            </div>
        ));
        return sach;
    }

    renderTheLoaiSach = () => {
        let theloaisach = this.state.theloaisach.map((theloaisachs, index) => (
            <option className='text-left' value={theloaisachs._id}>
                {theloaisachs.ten}
            </option>
        ));
        return theloaisach;
    }

    renderNhaXuatBan = () => {
        let nhaxuatban = this.state.nhaxuatban.map((nhaxuatbans, index) => (
            <option className='text-left' value={nhaxuatbans._id}>
                {nhaxuatbans.tennxb}
            </option>
        ));
        return nhaxuatban;
    }

    renderChiTietTacGia = () => {
        let tacgia = this.state.tacgia.map((tacgias, index) => (
            <option className='text-left' value={tacgias._id}>
                {tacgias.tentacgia}
            </option>

        ));
        return tacgia;
    }

    render() {
        var { sach } = this.state;
        return (
            <div>
                <Header />
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
                            <div className="col-lg-9 col-md-7">
                                <div className="sidebar">
                                    <label for="car1"> <b>Danh mục:</b> &nbsp;</label>
                                    <select onChange={(e) => this.handleChang(e)} className="text-center mb-4 cars" style={{ height: '30px', width: '170px' }} id="car1">
                                        <option>Tất cả</option>
                                        {this.renderTheLoaiSach()}
                                    </select>
                                    <label for="car2"> &nbsp; &nbsp; &nbsp; <b>Nhà xuất bản:</b> &nbsp;</label>
                                    <select onChange={(e) => this.handleChangNhaXuatBan(e)} className="text-center mb-4 cars" style={{ height: '30px', width: '170px' }} id="car2">
                                        <option>Tất cả</option>
                                        {this.renderNhaXuatBan()}
                                    </select>
                                    <label for="car3"> &nbsp; &nbsp; &nbsp; <b>Tác giả:</b> &nbsp;</label>
                                    <select onChange={(e) => this.handleChangChiTietTacGia(e)} className="text-center mb-4 cars" style={{ height: '30px', width: '180px' }} id="car3">
                                        <option>Tất cả</option>
                                        {this.renderChiTietTacGia()}
                                    </select>
                                </div>
                            </div>
                            {sach.length !== 0 ? (
                                <>
                                    <div className="col-lg-9 col-md-7">
                                        <div className="row">
                                            {this.renderSach()}
                                        </div>
                                    </div>
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

export default (props) => (
    <Sach
        {...props}

        dispatch={useDispatch()}

    />

);