import React, { Component } from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import callApi from '../api/callApi';

class Baiviet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            baiviet: []
        };
    }

    componentDidMount() {
        callApi("api/baiviet", "GET", null).then((res) => {
            this.setState({
                baiviet: res.data.baiviet,
            });
        });
    }

    renderBaiViet = () => {
        let baiviet = this.state.baiviet.map((baiviets, index) => (
            <div className="col-lg-4 col-md-4 col-sm-6">
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
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Bài viết</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ </Link>
                                        <span>Bài viết</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                        {this.renderBaiViet()}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Baiviet;