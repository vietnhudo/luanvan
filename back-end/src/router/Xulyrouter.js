const express = require("express");
const router = express.Router();
const xulyController = require('../controller/Xulycontroller');

//trangchu
router.get("/", xulyController.trangchu);

//dulieu  : SÁCH
router.get('/sach', xulyController.sach);
router.get('/themsach', xulyController.themsach);
router.get('/sua-sach',xulyController.suasach);

//dulieu  : THỂ LOẠI SÁCH
router.get("/theloaisach", xulyController.theloaisach);
router.get("/themtheloaisach", xulyController.themtheloaisach);
router.get('/sua-theloaisach',xulyController.suatheloaisach);

//dulieu  : NHÀ XUẤT BẢN
router.get("/nhaxuatban", xulyController.nhaxuatban);
router.get("/themnhaxuatban", xulyController.themnhaxuatban);
router.get('/sua-nhaxuatban',xulyController.suanhaxuatban);

//dulieu  : TÁC GIẢ
router.get("/tacgia", xulyController.tacgia);
router.get("/themtacgia", xulyController.themtacgia);
router.get('/sua-tacgia',xulyController.suatacgia);

//dulieu  : CHI TIẾT TÁC GIẢ
router.get("/chitiettacgia", xulyController.chitiettacgia);
router.get("/themchitiettacgia", xulyController.themchitiettacgia);
router.get('/sua-chitiettacgia',xulyController.suachitiettacgia);

//dulieu  : KHÁCH HÀNG
router.get("/khachhang", xulyController.khachhang);

//dulieu  : BÀI VIẾT
router.get("/baiviet", xulyController.baiviet);
router.get("/thembaiviet", xulyController.thembaiviet);
router.get('/sua-baiviet',xulyController.suabaiviet);

//dulieu  : Đặt Hàng
router.get("/dathang", xulyController.dathang);

module.exports = router;