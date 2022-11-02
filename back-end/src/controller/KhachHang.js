
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const KhachHang = require('../model/KhachHang');
//lấy dữ liệu khách hàng
exports.lay_danhsach_khachhang = (req, res, next) => {
    KhachHang.find()
        .select('_id username password email diachi sodienthoai')
        .exec()
        .then((docs) => {
            const response = {
                count: docs.length,
                khachhang: docs.map(doc => {
                    return {
                        _id: doc._id,
                        username: doc.username,
                        password: doc.password,
                        email: doc.email,
                        diachi: doc.diachi,
                        sodienthoai: doc.sodienthoai,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:2000/khachhang/' + doc._id
                        }
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

//xoá khách hàng
exports.xoa_khachhang = (req, res, next) => {
    const id = req.params.idkhachhang
    KhachHang.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Xóa dữ liệu khách hàng",
          request: {
            type: 'DELETE',
            url: 'http://localhost:2000/khachhang/',
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
}

exports.dangKyKhachHang = (req,res, next)=>{
    KhachHang.find({ username: req.body.username })
    .exec()
    .then(khachhang => {
      if (khachhang.length >= 1) {
        return res.status(400).json({
          message: "Username ....."
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const khachhang = new KhachHang({
              _id: new mongoose.Types.ObjectId(),
              username: req.body.username,
              email: req.body.email,
              password: hash,
              diachi: req.body.diachi,
              sodienthoai: req.body.sodienthoai,
            });
            khachhang
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "Tài khoản khách hàng được đã tạo"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
}

exports.dangNhapKhachHang = (req,res,next)=>{
  KhachHang.find({ username: req.body.username })
  .exec()
  .then(khachhang => {
    if (khachhang.length < 1) {
      return res.status(401).json({
        message: "Đăng nhập thất bại"
      });
    }
    if(!khachhang){
      res.status(404).json("Không có khách hàng này");
    }
    bcrypt.compare(req.body.password, khachhang[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: "Đăng nhập thất bại"
        });
      }
      if (result) {
        const token = jwt.sign(
          {   
            username: khachhang[0].username,
            khachHangId: khachhang[0]._id
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h"
          }
        );
        const {password, ...other} = khachhang[0]._doc;
        return res.status(200).json({
          token,
          ...other
        });
      }
      res.status(401).json({
        message: "Đăng nhập thất bại"
      });
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
}


