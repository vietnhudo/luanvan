const express = require('express');
const router = express.Router();
 

const ChiTietTacGiaController = require('../controller/ChiTietTacGia');

//lấy dữ liệu
router.get('/',ChiTietTacGiaController.lay_danhsach_chitiettacgia);

//thêm
router.post('/', ChiTietTacGiaController.them_chitiettacgia);

 //Xóa 
 router.delete('/:idchitiettacgia',ChiTietTacGiaController.xoa_chitiettacgia);
 
module.exports = router;
