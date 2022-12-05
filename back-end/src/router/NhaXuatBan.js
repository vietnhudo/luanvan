const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const NhaXuatBanController = require('../controller/NhaXuatBan');

//lấy danh sách của nhà xuất bản
router.get('/',NhaXuatBanController.lay_danhsach_nhaxuatban);

// thêm nhà xuất bản
router.post('/',NhaXuatBanController.them_nhaxuatban);

//xoá nhà xuất bản
router.delete('/:idnhaxuatban',NhaXuatBanController.xoa_nhaxuatban);
//lay id thể loại sách
router.get('/:idnhaxuatban',NhaXuatBanController.get_nhaxuatban_id);

//Cập nhật thể loại sách
router.post('/suanhaxuatban',NhaXuatBanController.sua_nhaxuatban);

module.exports = router;
