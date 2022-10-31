const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const TheLoaiSachController = require('../controller/TheLoaiSach');

//lấy danh sách của thể loại sách
router.get('/',TheLoaiSachController.lay_danhsach_theloaisach);

// thêm thể loại sách
router.post('/',TheLoaiSachController.them_theloaisach);

//xoá thể loại sách
router.delete('/:idtheloaisach',TheLoaiSachController.xoa_theloaisach);

module.exports = router;
