const express = require('express');
const router = express.Router();

const DathangController = require('../controller/DatHang');

//lấy tất cả don hàng
router.get('/',DathangController.lay_danhsach_dathang);

//thêm dat hàng
router.post('/',DathangController.them_dathang);

//xóa đơn hàng
router.delete('/:dathangId',DathangController.xoa_dathang);


module.exports = router;