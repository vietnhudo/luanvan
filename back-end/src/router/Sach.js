const express = require('express');
const router = express.Router();


const SachController = require('../controller/Sach');
// get list sách

//lấy danh sách của sách
router.get('/',SachController.lay_danhsach_sach);

// thêm sách
router.post('/',SachController.them_sach);
module.exports = router;
