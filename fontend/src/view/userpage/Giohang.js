import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { xoa_giohang } from '../../redux/cart';
import { capnhat_giohang } from '../../redux/cart';
import util from '../../util/util';

const Giohang = () => {

    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.auth.login.currentUser);


    let soluong = 0;
    let price = 0;

    carts?.forEach((item) => {
        soluong += item.qty;
        price += item.qty * item.gia;
    });

    return (
        <div>
            <Header />
            <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Giỏ hàng của bạn</h2>
                                <div className="breadcrumb__option">
                                    <Link to={'/'}>Trang chủ</Link>
                                    <span>Giỏ hàng của bạn</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng cộng</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts.map(cart => <tr>
                                                <td className="shoping__cart__item">
                                                    <img style={{ width: "200px", height: "200px" }} src={`${process.env.REACT_APP_API_URL}/${cart.hinh.split(",")[0]}`} alt="" />
                                                    <h5>{cart.ten}</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    {util(cart.gia)}
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <input
                                                                min="1"
                                                                max="5"
                                                                type="number"
                                                                id="qty"
                                                                name="qty"
                                                                value={cart.qty}
                                                                onChange={(e) => {
                                                                    if (e.target.value > 0) {
                                                                        var product = { ...cart };
                                                                        product.qty = Number(e.target.value);
                                                                        dispatch(capnhat_giohang(product));
                                                                    } else if (Number(e.target.value) === 0) {
                                                                        dispatch(xoa_giohang(cart));
                                                                    }

                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    {util(Math.floor((cart.gia) * (cart.qty)))}
                                                </td>
                                                <td >
                                                    <from>
                                                        <button onClick={() => dispatch(xoa_giohang(cart))} className="btn btn-xxl"> <i style={{ color: 'red', fontSize: '25px' }} className="fa fa-trash" /></button>
                                                    </from>
                                                </td>
                                            </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <Link to={'/sach'} className="primary-btn cart-btn float-right" style={{ backgroundColor: "#006666", color: "#ffffff" }}>Tiếp tục mua hàng</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Mã giảm giá</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Nhập mã giảm giá" />
                                        <button style={{ backgroundColor: "#006666", color: "#ffffff" }} type="submit" className="site-btn">Sử dụng</button>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Tổng cộng</h5>
                                <ul>
                                    <li>Tổng số lượng sản phẩm<span>{soluong} cuốn</span></li>
                                    <li>Tạm tính <span>{util(price)}</span></li>
                                </ul>
                               
                                   
                                        <Link to={'/thanhtoan'} className="primary-btn">Thanh toán</Link>
                                  
                                
                                  
                                   
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Giohang;