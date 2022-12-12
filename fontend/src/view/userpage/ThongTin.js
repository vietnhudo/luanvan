import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import callApi from '../api/callApi'

const Thongtin = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [dathang, setDatHang] = useState([]);

    useEffect(() => {
        callApi(`api/dathang/khachhang/${user._id}`, "GET", null).then(res => {
            setDatHang(res.data.dathang);
            console.log(res.data.dathang);
        });
    }, []);
    return (
        <div>
            <Header />
            <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Thông tin cá nhân</h2>
                                <div className="breadcrumb__option">
                                    <Link to={'/'}>Trang chủ </Link>
                                    <span>Thông tin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid pt-5 ">

                <div className="text-center mb-4 ">
                    <div className="text-center mb-4">
                        <h2><span className="px-2">Thông tin khách hàng</span></h2>
                    </div>
                </div>
                <div className="row">
                    {user ? (
                        <>
                            <ul>
                                <div className="col-md-12 form-group">
                                    <label className='text-danger'>Họ và tên người nhận:</label>
                                    <li className='nav-item nav-link'><p className='font-weight-bold'>{user.username}</p></li>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label className='text-danger'>Email người nhận</label>
                                    <li className='nav-item nav-link'><p className='font-weight-bold'>{user.email}</p></li>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label className='text-danger'>Địa chỉ</label>
                                    <li className='nav-item nav-link'><p className='font-weight-bold'>{user.diachi}</p></li>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label className='text-danger'>Số điện thoại</label>
                                    <li className='nav-item nav-link'><p className='font-weight-bold'> 0{user.sodienthoai}</p></li>
                                </div>
                            </ul>
                        </>
                    ) : (
                        <>
                            <h1>Không có thông tin khách hàng...</h1>
                        </>
                    )}
                </div>
                <div className="text-center mb-4 ">
                    <div className="text-center mb-4">
                        <h2><span className="px-2">Danh sách đơn hàng</span></h2>
                    </div>
                </div>
                <div className='row' >
                    {dathang.length !== 0 ? (
                        <>
                            {dathang.map((item, index) => (
                                <div className="px-xl-5 pb-3" >
                                    <div className="">
                                        <div className="card border-secondary" >
                                            <div className="card-header bg-secondary border-0">
                                                <h4 className="font-weight-semi-bold m-0">Đơn hàng</h4>
                                            </div>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <ul>

                                                        <h5 className="text-truncate mb-2">Tên người đặt hàng: {user.username}</h5>
                                                        <h5 className="text-truncate mb-2">Mã đơn hàng: {item._id}</h5>
                                                        <h5 className="text-truncate mb-2">Giá: {item.gia} </h5>
                                                        <h5 className="text-truncate mb-2">Số điện thoại: {item.sodienthoai}</h5>
                                                        <h5 className="text-truncate mb-2">Ngày đặt: {Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.parse(item.createdAt))}</h5>
                                                        {item.dulieusachs.map((items, index) => (

                                                            <h5 className="text-truncate mb-2">Tên sản phẩm: {items.dulieusach.ten}</h5>
                                                        ))}

                                                        {item.dulieuvanphongphams.map((items, index) => (

                                                            <h5 className="text-truncate mb-2">Tên sản phẩm: {items.dulieuvanphongpham.ten}</h5>
                                                        ))}
                                                        {item.dulieusachs.map((items, index) => (
                                                            <img className="img-fluid2" src={`${process.env.REACT_APP_API_URL}/${items.dulieusach.hinh.split(",")[0]}`} alt="" />
                                                        ))}
                                                        {item.dulieuvanphongphams.map((items, index) => (
                                                            <img className="img-fluid2" src={`${process.env.REACT_APP_API_URL}/${items.dulieuvanphongpham.hinh.split(",")[0]}`} alt="" />
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="card-header bg-secondary border-0">
                                                    <h4 className="font-weight-semi-bold m-0" style={{ color: 'red' }}>Trạng thái: {item.trangthai}</h4>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            ))}
                        </>
                    ) : (

                        <>
                            <h1 className='p-4'>Không có đơn hàng.........</h1>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Thongtin;