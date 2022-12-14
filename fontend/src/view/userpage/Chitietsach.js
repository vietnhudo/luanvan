import React, { Component } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import callApi from '../api/callApi';
import { useDispatch } from 'react-redux';
import { them_giohang } from '../../redux/cart';
import util from '../../util/util';

class Chitietsach extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sach: [],
            _id: '',
            ten: '',
            hinh: '',
            gia: '',
            noidung: '',
            tentheloai: '',
            tennxb: '',
            cart: [],
            chitiettacgia: [],
            tentacgia: '',
            chubien: '',
            tacgia: [],
            dstacgia: [],
            sachs: [],
        }
    }

    componentDidMount() {
        var { id } = this.props.params;
        // console.log(this.data);
        if (id) {
            callApi(`api/sach/${id}`, 'GET', null).then(res => {
                var data = res.data;
                console.log(res)
                this.setState({
                    _id: data.sach._id,
                    ten: data.sach.ten,
                    hinh: data.sach.hinh,
                    gia: data.sach.gia,
                    noidung: data.sach.noidung,
                    namxuatban: data.sach.namxuatban,
                    tentheloai: data.sach.theloaisach.ten,
                    tennxb: data.sach.nhaxuatban.tennxb,
                    sachs: data.sach
                });
            });
        }
        var { id } = this.props.params;
        // console.log(this.data);
        if (id) {
            callApi(`api/chitiettacgia/tacgias/${id}`, 'GET', null).then(res => {
                var data = res.data;
                console.log("tacgia", res.data.chitiettacgia);
                this.setState({
                    dstacgia: res.data.chitiettacgia
                });
            });
        }
        callApi("api/tacgia", "GET", null).then((res) => {
            this.setState({
                tacgia: res.data.tacgia,
            });
        });
    }

    onSave = (e) => {
        var { ten } = this.state;
        e.preventDefault();
        var { id } = this.props.params;
        console.log(this.props)
        if (id) {
            callApi("api/sach", 'PUT', {
                _id: id,
                ten: ten,
            })
        }
    }
    renderTacGia = () => {
        let dstacgia = this.state.dstacgia.map((dstacgias, index) => (
            <div className='row'>
                <div className='col-6'>{index + 1}. {dstacgias.tacgia.tentacgia}</div>
            </div>
        ));
        return dstacgia;
    }

    render() {
        var { _id, ten, hinh, gia, sachs, namxuatban, noidung, giamgia, tentheloai, tennxb, dstacgia } = this.state;
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Chi ti???t s??ch</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang ch??? </Link>
                                        <span>Chi ti???t s??ch</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__pic">
                                    <div className="product__details__pic__item">
                                        <img className="product__details__pic__item--large" src={`${process.env.REACT_APP_API_URL}/${hinh.split(",")[0]}`} alt="Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__text">
                                    <h3>{ten}</h3>
                                    <div className="product__details__rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" />
                                        <span>(18 ????nh gi??)</span>
                                    </div>
                                    <div className="product__details__price">{util(gia)}</div>
                                    {/* <div className="product__details__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" defaultValue={1} />
                                            </div>
                                        </div>
                                    </div> */}
                                    <button onClick={() => this.props.dispatch(them_giohang(sachs))} className="primary-btn"><i className='fa fa-shopping-cart'></i> Th??m v??o gi??? h??ng</button>
                                    <ul>
                                        <li><b>Lo???i s???n ph???m:</b> <span>{tentheloai}</span></li>
                                        <li><b>N??m xu???t b???n:</b> <span>{namxuatban}</span></li>
                                        <li><b>Nh?? xu???t b???n:</b> <span>{tennxb}</span></li>
                                        <li><b>Ch??? bi??n:</b> <span>{dstacgia[0]?.chubien}</span></li>
                                        {/* <li><b>T??c gi???:</b> <span>{dstacgia[0]?.tacgia?.tentacgia}</span></li> */}
                                        <li><b>T??c gi???:</b>
                                            {this.renderTacGia()}
                                        </li>
                                        <li><b>Chia S??? Tr??n</b>
                                            <div className="share">
                                                <a href="#"><i className="fa fa-facebook" /></a>
                                                <a href="#"><i className="fa fa-twitter" /></a>
                                                <a href="#"><i className="fa fa-instagram" /></a>
                                                <a href="#"><i className="fa fa-pinterest" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="product__details__tab">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Th??ng tin s???n ph???m</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">????nh gi?? s???n ph???m <span>(1)</span></a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                            <div className="product__details__tab__desc">
                                                <h2>{ten}</h2>
                                                <p>{noidung}</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                                            <div className="product__details__tab__desc">
                                                <div className="product__details__rating">
                                                    <span><h2>????nh gi?? s???n ph???m</h2></span>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                    <span>(d???a tr??n 2 ????nh gi??)</span>
                                                    <Link to className="primary-btn float-right"><i className='fa fa-pencil-square-o'></i> Vi???t ????nh gi??</Link>
                                                </div>
                                                <div className="product__details__rating" style={{ paddingTop: "40px" }}>
                                                    <div>
                                                        <h4>
                                                            <img style={{ width: "50px", height: "50px" }} className="" src="img/avatar.jpg" alt="" />
                                                            Lisa
                                                        </h4>
                                                    </div>
                                                    <span className='product__details__text' style={{ float: "right" }}>
                                                        <div className="product__details__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-half-o" />
                                                        </div>
                                                    </span>
                                                    <p>Verry good</p>
                                                </div>
                                                <div className="product__details__rating" style={{ paddingTop: "20px" }}>
                                                    <div>
                                                        <h4>
                                                            <img style={{ width: "50px", height: "50px" }} className="" src="img/avatar.jpg" alt="" />
                                                            Jenni
                                                        </h4>
                                                    </div>
                                                    <span className='product__details__text' style={{ float: "right" }}>
                                                        <div className="product__details__rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-half-o" />
                                                        </div>
                                                    </span>
                                                    <p>Verry good</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                {/* <section className="related-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title related__product__title">
                                    <h2>Th?????ng ???????c mua c??ng</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/sach1.jpg)" }}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><Link to={"/chitietsach"} ><i className="fa fa-eye" /></Link></li>
                                            <li><Link to={"/giohang"}><i className="fa fa-shopping-cart" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/sach2.jpg)" }}>
                                        <ul className="product__item__pic__hover">
<li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><Link to={"/chitietsach"} ><i className="fa fa-eye" /></Link></li>
                                            <li><Link to={"/giohang"}><i className="fa fa-shopping-cart" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/sach3.jpg)" }}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><Link to={"/chitietsach"} ><i className="fa fa-eye" /></Link></li>
                                            <li><Link to={"/giohang"}><i className="fa fa-shopping-cart" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{ backgroundImage: "url(img/sach4.jpg)" }}>
                                        <ul className="product__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><Link to={"/chitietsach"} ><i className="fa fa-eye" /></Link></li>
                                            <li><Link to={"/giohang"}><i className="fa fa-shopping-cart" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">Crab Pool Security</a></h6>
                                        <h5>$30.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</section> */}
                <Footer />
            </div >
        );
    }
}

export default (props) => (
    <Chitietsach
        {...props}
        params={useParams()}
        navigate={useNavigate()}
        dispatch={useDispatch()}
    />

);
