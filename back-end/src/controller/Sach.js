
const mongoose = require('mongoose');
const Sach = require('../model/Sach');

//lấy dữ liệu sách
exports.lay_danhsach_sach = (req, res, next) => {
    Sach.find()
        .select('ten gia _id hinh')
        .exec()
        .then((docs) => {
            const response = {
                count: docs.length,
                sach: docs.map(doc => {
                    return {
                        ten: doc.ten,
                        gia: doc.gia,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:2000/sach/' + doc._id
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

//thêm sách
exports.them_sach = (req, res, next) => {
    const sach = new Sach({
        _id: new mongoose.Types.ObjectId(),
        ten: req.body.ten,
        gia: req.body.gia,
    });
    sach.save().then(result => {
        console.log(result);
        // res.redirect("../sach");

    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

exports.xoa_sach = (req, res, next) => {
    const id = req.params.idsach
    Sach.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Xóa dữ liệu sách",
          request: {
            type: 'DELETE',
            url: 'http://localhost:2000/sach/',
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }
