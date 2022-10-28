const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');


const SachController = require('../controller/Sach');
// get list sách
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
//lấy danh sách của sách
router.get('/',SachController.lay_danhsach_sach);

// thêm sách
router.post('/',upload.single('hinh'),SachController.them_sach);

//xóa sách
router.delete('/:idsach',SachController.xoa_sach);
module.exports = router;
