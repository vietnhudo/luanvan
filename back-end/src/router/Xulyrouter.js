const express = require("express");
const router = express.Router();
const xulyController = require('../controller/Xulycontroller');

//trangchu
router.get("/", xulyController.trangchu);

//dulieu  : SÁCH
router.get("/sach", xulyController.sach);
//dulieu  : DỮ LIỆU SÁCH
router.get("/dulieusach", xulyController.theloaisach);