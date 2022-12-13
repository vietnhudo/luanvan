import { useNavigate, Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import callApi from '../api/callApi'
import { useDispatch, useSelector } from "react-redux";
import { React, useState } from 'react';
import { lammoi_giohang } from '../../redux/cart';
import util from '../../util/util';
import { themDonHangMoi } from '../../action/reducers/api';

const Thanhtoan = () => {
    const [tenkhach, setTenKhach] = useState("");
    const [email, setEmail] = useState("");
    const [diachi, setDiachi] = useState("");
    const [sodienthoai, setSodienthoai] = useState("");
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const carts = useSelector((state) => state.cart.cart);
    const [dathang] = useState(null);
    let soluong = 0;
    let price = 0;

    carts?.forEach((item) => {
        soluong += item.qty;
        price += item.qty * item.gia;
    });


    const thanhtoansaaa = () => {
        const dssach = [];
        carts.forEach((item) => {
            if (item.noidung) {
                dssach.push(item);
            }
        })
        const themDonHang = async () => {
          
            callApi("api/dathang", "POST", {
                tenkhach: tenkhach,
                sodienthoai: sodienthoai,
                diachi: diachi,
                sachs: dssach.map((item) => ({
                    sach: item._id,
                    ten: item.ten,
                    gia: item.gia,

                    soluong: item.qty,
                })),
                gia: price,
            }).then((res) => {

            });

        };
        themDonHang();
        dispatch(lammoi_giohang());
        alert('Thành công hoàn tất đơn hàng');
    }

    const thanhtoan = () => {
        const dssach = [];
        carts.forEach((item) => {
            if (item.noidung) {
                dssach.push(item);
            }
        })

        const themDatHang = async () => {
            callApi("api/dathang", "POST", {
                khachhang: user._id,
                sachs: dssach.map((item) => ({
                    sach: item._id,
                    ten: item.ten,
                    gia: item.gia,

                    soluong: item.qty,
                })),
                gia: price,
                tenkhach: user.tenkhach,
                sodienthoai: user.sodienthoai,
                diachi: user.diachi,

            }).then((res) => {

            });


        };
        themDatHang();
        dispatch(lammoi_giohang());
        alert('Thành công hoàn tất đơn hàng');
    }

    return (
        <div>
            <Header />
            <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Thanh toán</h2>
                                <div className="breadcrumb__option">
                                    <Link to={'/'}>Trang chủ </Link>
                                    <span>Thanh toán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                        <h4>Thông tin giao hàng</h4>
                        <form action="#">
                            <div className="row">
                                {user ? (
                                    <>
                                        <div className="col-lg-8 col-md-6">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="checkout__input">
                                                        <p>Họ và tên<span>*</span></p>
                                                        <input type="text" value={user.username} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkout__input">
                                                <p>Địa chỉ<span>*</span></p>
                                                <input type="text" value={user.diachi} className="checkout__input__add" />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="checkout__input">
                                                        <p>Số điện thoại<span>*</span></p>
                                                        <input type="text" value={'0' + user.sodienthoai} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="checkout__input">
                                                        <p>Email<span>*</span></p>
                                                        <input type="text" className="checkout__input__add" value={user.email} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-lg-8 col-md-6">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="checkout__input">
                                                        <p>Họ và tên<span>*</span></p>
                                                        <input type="text" className="checkout__input__add" onChange={(e) => setTenKhach(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkout__input">
                                                <p>Địa chỉ<span>*</span></p>
                                                <input type="text" className="checkout__input__add" onChange={(e) => setDiachi(e.target.value)} />
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="checkout__input">
                                                        <p>Số điện thoại<span>*</span></p>
                                                        <input type="text" onChange={(e) => setSodienthoai(e.target.value)} />
                                                    </div>
                                                </div>
                                                {/* <div className="col-lg-6">
                                                    <div className="checkout__input">
                                                        <p>Email<span>*</span></p>
                                                        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>
                                                </div> */}
                                                <div className="col-lg-4 col-md-6">
                                                    <div className="checkout__order">
                                                        <h4>Thông tin đơn hàng</h4>
                                                        <div className="checkout__order__total">Số lượng <span>{soluong} cuốn</span></div>
                                                        <div className="checkout__order__total">Thành tiền <span>{util(price)}</span></div>
                                                        {dathang
                                                            ? `Order has been created successfully. Your order number is ${dathang}`
                                                            : `Nhấn vào thanh toán để thanh toán`}
                                                       <button type="submit" onClick={() => thanhtoansaaa()} className="site-btn">Thanh toán</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>

                                )}

                                {/* {user ? (
                                    <>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="checkout__order">
                                                <h4>Thông tin đơn hàng</h4>
                                                <div className="checkout__order__total">Số lượng <span>{soluong} cuốn</span></div>
                                                <div className="checkout__order__total">Thành tiền <span>{util(price)}</span></div>
                                                {dathang
                                                    ? `Order has been created successfully. Your order number is ${dathang}`
                                                    : `Nhấn vào thanh toán để thanh toán`}
                                                <Link to="/"><button type="submit" onClick={() => thanhtoan()} className="site-btn">Thanh toán</button></Link>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>

                                    </>

                                )} */}

                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Thanhtoan;