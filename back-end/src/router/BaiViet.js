const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');


const BaiVietController = require('../controller/BaiViet');
// // hiển thị và thêm hình
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  const fileFilter = (req, file, cb)=>{
      if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
      }else{
        cb(null,false);
      }
  };
const upload = multer({
    storage: storage, limits: { fileSize: 1024 * 1024 * 5},
    fileFilter: fileFilter
});
//lấy danh sách của bài viết
router.get('/',BaiVietController.lay_danhsach_baiviet);

//lấy id sách
router.get('/:baivietId',BaiVietController.get_id_baiviet);

// thêm sách
router.post('/',upload.single('hinh'),BaiVietController.them_baiviet);

//xóa sách
router.delete('/:idbaiviet',BaiVietController.xoa_baiviet);


module.exports = router;
