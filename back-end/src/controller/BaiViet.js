
const mongoose = require('mongoose');
const BaiViet = require('../model/BaiViet');
//lấy dữ liệu bài viết
exports.lay_danhsach_baiviet = (req, res, next) => {
    BaiViet.find()
        .select('ten _id hinh noidung')
        .exec()
        .then((docs) => {
            const response = {
                count: docs.length,
                baiviet: docs.map(doc => {
                    return {
                        _id: doc._id,
                        ten: doc.ten,
                        hinh: doc.hinh,
                        noidung:doc.noidung,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:2000/baiviet/' + doc._id
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

//lấy id bài viết
exports.get_id_baiviet = (req, res, next) => {
  const id = req.params.baivietId;
  BaiViet.findById(id).select('ten _id hinh noidung')
    .exec()
    .then(doc => {
      console.log("From data", doc);
      if (doc) {
        res.status(200).json(
          {
            baiviet: doc,
            request: {
              type: 'GET',
              url: 'http://localhost:2000/baiviet/'
            }
          }
        );
      } else {
        res.status(400).json({ message: 'không lấy dc dữ liệu' })
      }

    })
    .catch(err => {

      console.log(err);
      res.status(500).json({ error: err })
    }
    );
}

//thêm bài viết
exports.them_baiviet = (req, res, next) => {
    const baiviet = new BaiViet({
      _id: new mongoose.Types.ObjectId(),
      ten: req.body.ten,
      hinh: req.file.path,
      noidung: req.body.noidung,
    });
    baiviet.save().then(result => {
      console.log(result);
      res.redirect("../BaiViet");
  
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        })
      });
  
  }

//xoá bài viết
exports.xoa_baiviet = (req, res, next) => {
    const id = req.params.idbaiviet
    BaiViet.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Xóa dữ liệu bài viết thành công",
          request: {
            type: 'DELETE',
            url: 'http://localhost:2000/baiviet/',
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }

//sửa bài viết
exports.sua_baiviet = (req, res, next) => {
  var dataBaiViet = {
    ten: req.body.ten,
    noidung: req.body.noidung,
  }
  if (req.file) {
    dataBaiViet.hinh = req.file.path;
  }
  BaiViet.findByIdAndUpdate(req.body.baivietId, dataBaiViet).exec().then((result) => {
    res.redirect("../../baiviet");
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}