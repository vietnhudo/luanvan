const express = require('express');
const router = express.Router();
 

const TacGiaController = require('../controller/TacGia');

//lấy dữ liệu
router.get('/',TacGiaController.lay_danhsach_tacgia);
router.get('/',TacGiaController.get_all_tacgia);

//lay id dữ liệu tác giả
router.get('/:dmTacGiaId',TacGiaController.get_tacgia_id);

//thêm
router.post('/', TacGiaController.them_tacgia);
//sửa
router.post('/suatacgia',TacGiaController.sua_tacgia);
 //Xóa 
 router.delete('/:idtacgia',TacGiaController.xoa_tacgia);
 
module.exports = router;
