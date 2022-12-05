
const mongoose = require('mongoose');
const NhaXuatBan = require('../model/NhaXuatBan');
//lấy dữ liệu nhà xuất bản
exports.lay_danhsach_nhaxuatban = (req, res, next) => {
  NhaXuatBan.find()
    .select('tennxb _id quocgia')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        nhaxuatban: docs.map(doc => {
          return {
            _id: doc._id,
            tennxb: doc.tennxb,
            quocgia: doc.quocgia,
            request: {
              type: 'GET',
              url: 'http://localhost:2000/nhaxuatban/' + doc._id
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

//thêm nhà xuất bản
exports.them_nhaxuatban = (req, res, next) => {
  const nhaxuatban = new NhaXuatBan({
    _id: new mongoose.Types.ObjectId(),
    tennxb: req.body.tennxb,
    quocgia: req.body.quocgia,
  });
  nhaxuatban.save().then(result => {
    console.log(result);
    res.redirect("../NhaXuatBan");

  })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });

}

//xoá nhà xuất bản
exports.xoa_nhaxuatban = (req, res, next) => {
  const id = req.params.idnhaxuatban
  NhaXuatBan.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Xóa dữ liệu nhà xuất bản",
        request: {
          type: 'DELETE',
          url: 'http://localhost:2000/nhaxuatban/',
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}

//sửa nhà xuất bản
exports.sua_nhaxuatban = (req, res, next) => {
  var dataNhaXuatBan = {
    tennxb: req.body.tennxb,
    quocgia: req.body.quocgia,
  };
  NhaXuatBan.findByIdAndUpdate(req.body.idnhaxuatban, dataNhaXuatBan)
    .exec()
    .then(result => {
      res.redirect("../../nhaxuatban");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

}


// lấy id nhà xuất bản
exports.get_nhaxuatban_id = (req, res, next) => {
  const id = req.params.idnhaxuatban;
  NhaXuatBan.findById(id).select('tennxb _id quocgia')
    .exec()
    .then(doc => {
      console.log("From data", doc);
      if (doc) {
        res.status(200).json(
          {
            nhaxuatban: doc,
            request: {
              type: 'GET',
              url: 'http://localhost:2000/nhaxuatban/' + id
            }
          }
        );
      } else {
        req.status(400).json({ message: 'không lấy dc dữ liệu' })
      }

    })
    .catch(err => {

      console.log(err);
      res.status(500).json({ error: err })
    }
    );

}
