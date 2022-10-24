const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const TheLoaiSachController = require('../controller/TheLoaiSach');
// get list sách

//lấy danh sách của sách
router.get('/',TheLoaiSachController.lay_danhsach_theloaisach);

// thêm sách
router.post('/',TheLoaiSachController.them_theloaisach);
module.exports = router;
