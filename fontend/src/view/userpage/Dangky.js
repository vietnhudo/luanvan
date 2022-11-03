import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { dangkyKhachHang } from '../../action/reducers/api';
import Footer from '../layout/Footer';
import Header from '../layout/Header';


const Dangky = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [diachi, setDiachi] = useState("");
    const [sodienthoai, setSodienthoai] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDangky = (e) => {
        e.preventDefault();
        const newKhachHang = {
            username: username,
            password: password,
            email: email,
            diachi: diachi,
            sodienthoai: sodienthoai,
        };
        dangkyKhachHang(newKhachHang, dispatch, navigate);
        alert('Đăng ký thành công');
    };
    return (
        <div>
            <Header />
            <section className="breadcrumb-section set-bg" style={{ backgroundColor: "#006666" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Đăng ký</h2>
                                <div className="breadcrumb__option">
                                    <Link to={'/'}>Trang chủ </Link>
                                    <span>Đăng ký</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-form spad">
                <div className="container">
                    <div className="row" style={{ backgroundColor: "#fafafa", padding: "50px", border: "1px solid #e5e5e5" }}>
                        <div className="col-lg-12">
                            <div className="contact__form__title">
                                <h2>Đăng ký </h2>
                            </div>
                            <form onSubmit={handleDangky}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <input type="text" placeholder="Tên khách hàng" onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <input type="text" placeholder="Địa chỉ" onChange={(e) => setDiachi(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <input type="phone" placeholder="Số điện thoại" onChange={(e) => setSodienthoai(e.target.value)}/>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <button type="submit" className="site-btn"><i className='fa fa-sign-in'></i> Đăng ký</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Dangky;