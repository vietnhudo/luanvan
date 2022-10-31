
const mongoose = require('mongoose');
const TheLoaiSach = require('../model/TheLoaiSach');

//lấy thể loại sách
exports.lay_danhsach_theloaisach = (req, res, next) => {
     TheLoaiSach.find()
        .select('ten _id')
        .exec()
        .then((docs) => {
            const response = {
                count: docs.length,
                 theloaisach: docs.map(doc => {
                    return {
                        ten: doc.ten,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:2000/theloaisach/' + doc._id
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

//thêm thể loại sách
exports.them_theloaisach = (req, res, next) => {
    const theloaisach = new TheLoaiSach({
        _id: new mongoose.Types.ObjectId(),
        ten: req.body.ten,
    });
    theloaisach.save().then(result => {
        console.log(result);
        res.redirect("../theloaisach");

    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

//xoá thể loại sách
exports.xoa_theloaisach = (req, res, next) => {
    const id = req.params.idtheloaisach
    TheLoaiSach.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Xóa dữ liệu thể loại sách",
          request: {
            type: 'DELETE',
            url: 'http://localhost:2000/theloaisach/',
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }