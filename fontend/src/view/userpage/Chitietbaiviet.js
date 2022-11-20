import React, { Component } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import callApi from '../api/callApi';

class Chitietbaiviet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            baiviet: [],
            _id: '',
            ten: '',
            hinh: '',
            noidung: '',
        }
    }

    componentDidMount() {

        callApi("api/baiviet", "GET", null).then((res) => {
            this.setState({
                baiviet: res.data.baiviet,
            });
        });

        var { id } = this.props.params;
        console.log(this.data);
        if (id) {
            callApi(`api/baiviet/${id}`, 'GET', null).then(res => {
                var data = res.data;
                console.log(res)
                this.setState({
                    _id: data.baiviet._id,
                    ten: data.baiviet.ten,
                    hinh: data.baiviet.hinh,
                    noidung: data.baiviet.noidung,
                });
            });
        }
    }

    renderBaiViet = () => {
        let baiviet = this.state.baiviet.map((baiviets, index) => (
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="blog__item">
                    <div className="blog__item__pic">
                        <Link to={`/chitietbaiviet/${baiviets._id}`}><img src={`${process.env.REACT_APP_API_URL}/${baiviets.hinh.split(",")[0]}`} alt="" /></Link>
                    </div>
                    <div className="blog__item__text_1">
                        <h5><Link to={`/chitietbaiviet/${baiviets._id}`}>{(baiviets.ten)}</Link></h5>
                        <p>{(baiviets.noidung)}</p>
                    </div>
                </div>
            </div>
        ));
        return baiviet;
    }

    render() {
        var { _id, ten, hinh, noidung } = this.state;
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Chi tiết bài viết</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ </Link>
                                        <span>Chi tiết bài viết</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="blog__details__text" style={{ width: "100%" }}>
                                    <h3>{ten}</h3>
                                    <p>{noidung}</p>
                                    <img style={{ width: "100%" }} src={`${process.env.REACT_APP_API_URL}/${hinh.split(",")[0]}`} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="blog__sidebar__item">
                                    <h4>Bài viết liên quan</h4>
                                    <div className="row">{this.renderBaiViet()}</div>
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

export default (props) => (
    <Chitietbaiviet
        {...props}
        params={useParams()}
        navigate={useNavigate()}
    // dispatch={useDispatch()}
    />

);