const express = require("express");
const router = express.Router();
const xulyController = require('../controller/Xulycontroller');

//trangchu
router.get("/", xulyController.trangchu);

//dulieu  : SÁCH
router.get('/sach', xulyController.sach);
router.get('/themsach', xulyController.themsach);


//dulieu  : THỂ LOẠI SÁCH
router.get("/theloaisach", xulyController.theloaisach);
router.get("/themtheloaisach", xulyController.themtheloaisach);

//dulieu  : NHÀ XUẤT BẢN
router.get("/nhaxuatban", xulyController.nhaxuatban);
router.get("/themnhaxuatban", xulyController.themnhaxuatban);

module.exports = router;