const express = require('express');
const router = express.Router();
 

const ChiTietTacGiaController = require('../controller/ChiTietTacGia');

//lấy dữ liệu
router.get('/',ChiTietTacGiaController.lay_danhsach_chitiettacgia);
router.get('/tacgias/:dlsachId',ChiTietTacGiaController.get_laytacgia_trongsach);
router.get('/tacgia/:dmTacGiaId',ChiTietTacGiaController.get_insach_intacgia);

//lấy id chi tiết tác giả
router.get('/:dmChiTietTacGiaId',ChiTietTacGiaController.get_id_chitiettacgia);

//thêm
router.post('/', ChiTietTacGiaController.them_chitiettacgia);

//Sửa
router.post('/suachitiettacgia',ChiTietTacGiaController.sua_chitiettacgia);

 //Xóa 
 router.delete('/:idchitiettacgia',ChiTietTacGiaController.xoa_chitiettacgia);
 
module.exports = router;
