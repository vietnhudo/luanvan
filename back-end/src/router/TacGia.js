const express = require('express');
const router = express.Router();
 

const TacGiaController = require('../controller/TacGia');

//lấy dữ liệu
router.get('/',TacGiaController.lay_danhsach_tacgia);

//thêm
router.post('/', TacGiaController.them_tacgia);

 //Xóa 
 router.delete('/:idtacgia',TacGiaController.xoa_tacgia);
module.exports = router;
