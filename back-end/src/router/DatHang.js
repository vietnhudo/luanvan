const express = require('express');
const router = express.Router();

const DathangController = require('../controller/DatHang');

//lấy hóa đơn
router.get('/',DathangController.get_hoadon);

//lấy tất cả don hàng
router.get('/',DathangController.lay_danhsach_dathang);

//thêm dat hàng
router.post('/',DathangController.them_dathang);

//xóa đơn hàng
router.delete('/:dathangId',DathangController.xoa_dathang);

// lấy id don hang
router.get('/:dathangId',DathangController.get_dathang_id);

//Cập nhật
router.post('/suadathang',DathangController.sua_dathang);

router.get('/khachhang/:khachHangId',DathangController.get_khachhang_dathang);

module.exports = router;