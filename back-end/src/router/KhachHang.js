const express = require('express');
const router = express.Router();
require("dotenv").config();
const KhachHangController = require('../controller/KhachHang');



//lấy dữ liệu
router.get('/',KhachHangController.lay_danhsach_khachhang);

//Xóa 
router.delete('/:idkhachhang',KhachHangController.xoa_khachhang);
 
//đăng ký
router.post("/dangky", KhachHangController.dangKyKhachHang);

//đăng nhập
router.post("/dangnhap", KhachHangController.dangNhapKhachHang);

module.exports = router;
