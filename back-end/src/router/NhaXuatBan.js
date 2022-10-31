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

module.exports = router;
