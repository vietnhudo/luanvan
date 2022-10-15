import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

class Chitietsach extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Chi tiết sách</h2>
                                    <div className="breadcrumb__option">
                                        <Link to={'/'}>Trang chủ </Link>
                                        <span>Chi tiết sách</span>
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
                                        <img className="product__details__pic__item--large" src="img/sach1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product__details__text">
                                    <h3>Cà phê cùng Tony</h3>
                                    <div className="product__details__rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-half-o" />
                                        <span>(18 đánh giá)</span>
                                    </div>
                                    <div className="product__details__price">60.000 vnđ</div>
                                    <p>Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên, khi rất nhiều dự định mà thiếu đôi phần định hướng, thì cảm hứng là điều quan trọng để bạn trẻ bắt đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình.
                                        Cà Phê Cùng Tony là tập hợp những bài viết của tác giả Tony Buổi Sáng.
                                        Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường.</p>
                                    <div className="product__details__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" defaultValue={1} />
                                            </div>
                                        </div>
                                    </div>
                                    <Link to className="primary-btn"><i className='fa fa-shopping-cart'></i> Thêm vào giỏ hàng</Link>
                                    <ul>
                                        <li><b>ID</b> <span>8934974151579</span></li>
                                        <li><b>Loại sản phẩm</b> <span>Tâm Lý</span></li>
                                        <li><b>Khả dụng:</b> <span><i className='fa fa-check-square-o' style={{ textDecorationColor: "Highlight" }}></i> Còn hàng </span></li>

                                        <li><b>Share on</b>
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
                                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Thông tin sản phẩm</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Đánh giá sản phẩm <span>(1)</span></a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                            <div className="product__details__tab__desc">
                                                <h2>Cà Phê Cùng Tony</h2>
                                                <p> Có đôi khi vào những tháng năm bắt đầu vào đời, giữa vô vàn ngả rẽ và lời khuyên,
                                                    khi rất nhiều dự định mà thiếu đôi phần định hướng, thì CẢM HỨNG là điều quan trọng để bạn trẻ bắt
                                                    đầu bước chân đầu tiên trên con đường theo đuổi giấc mơ của mình. Cà Phê Cùng Tony là tập hợp những bài
                                                    viết của tác giả Tony Buổi Sáng. Đúng như tên gọi, mỗi bài nhẹ nhàng như một tách cà phê, mà bạn trẻ có
                                                    thể nhận ra một chút gì của chính mình hay bạn bè mình trong đó: Từ chuyện lớn như định vị bản thân giữa
                                                    bạn bè quốc tế, cho đến chuyện nhỏ như nên chú ý những phép tắc xã giao thông thường.
                                                    Chúng tôi tin rằng những người trẻ tuổi luôn mang trong mình khát khao vươn lên và tấm lòng hướng thiện,
                                                    và có nhiều cách để động viên họ biến điều đó thành hành động. Nếu như tập sách nhỏ này có thể khơi gợi trong
                                                    lòng bạn đọc trẻ một cảm hứng tốt đẹp, như tách cà phê thơm vào đầu ngày nắng mới, thì đó là niềm vui lớn
                                                    của tác giả Tony Buổi Sáng.
                                                    Tony Buổi Sáng cũng là tác giả của Trên đường băng, tác phẩm hiện đã bán hơn 200.000 bản
                                                    Trích đoạn
                                                    ...Thật ra Tony hiểu vì sao các bác giáo sư tiến sĩ soạn sách đã phải đưa vào nhiều nội dung như vậy.
                                                    Rất là tâm huyết và đáng trân trọng. Vì ngày xưa, kiến thức rất khó tìm. Nhiều điều hữu ích chỉ nằm trong sách,
                                                    trong thư viện các thành phố lớn, các trường các viện đại học lớn và người ta phải nhớ mọi thứ, nên phải cộng điểm
                                                    cho học sinh nông thôn vì ít cơ hội tiếp cận kiến thức. Nhưng, bây giờ kiến thức nằm hết trên mạng, trong file máy tính,
                                                    truy cập là ra ngay, nên các nước đã phải thay đổi chương trình học phổ thông sau khi máy tính và internet ra đời.
                                                    Học sinh chỉ cần nhớ những gì cốt lõi, và PHƯƠNG PHÁP tìm kiếm tài liệu. Vì chữ nghĩa rồi cũng sẽ rụng rơi theo thời gian,
                                                    kiến thức mới lại bổ sung liên tục, nên phương pháp tìm kiếm thông tin tốt sẽ giúp ích cho các bạn trong cuộc sống sau này.
                                                    Làm ngành nghề gì cũng phải cập nhật cái mới... </p>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                                            <div className="product__details__tab__desc">
                                                <div className="product__details__rating">
                                                    <span><h2>Đánh giá sản phẩm</h2></span>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-half-o" />
                                                    <span>(dựa trên 2 đánh giá)</span>
                                                    <Link to className="primary-btn float-right"><i className='fa fa-pencil-square-o'></i> Viết đánh giá</Link>
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
                <section className="related-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title related__product__title">
                                    <h2>Thường được mua cùng</h2>
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
                </section>
                <Footer />
            </div >
        );
    }
}

export default Chitietsach;