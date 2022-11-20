
const mongoose = require('mongoose');
const Sach = require('../model/Sach');



//lọc và tìm kiếm theo thể loại sách
exports.get_theloaisach = (req, res, next) => {
  const sachid = req.params.sachid;
  Sach.find({ theloaisach: sachid })
    .populate({
      path: "sach",
      populate: { path: "theloaisach" },
    })
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        sach: docs.map((doc) => {
          return {
            _id: doc._id,
            ten: doc.ten,
            gia: doc.gia,
            giamgia: doc.giamgia,
            hinh: doc.hinh,
            noidung: doc.noidung,
            namxuatban: doc.namxuatban,
            theloaisach: doc.theloaisach,
            nhaxuatban: doc.nhaxuatban,
          };
        }),
      };

      res.status(200).json(response);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

//lọc và tìm kiếm theo nhà xuất bản
exports.get_nhaxuatban = (req, res, next) => {
  const idnxb = req.params.idnxb;
  Sach.find({ nhaxuatban: idnxb })
    .populate({
      path: "sach",
      populate: { path: "nhaxuatban" },
    })
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        sach: docs.map((doc) => {
          return {
            _id: doc._id,
            ten: doc.ten,
            gia: doc.gia,
            giamgia: doc.giamgia,
            hinh: doc.hinh,
            noidung: doc.noidung,
            namxuatban: doc.namxuatban,
            theloaisach: doc.theloaisach,
            nhaxuatban: doc.nhaxuatban,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

//lấy dữ liệu sách
exports.lay_danhsach_sach = (req, res, next) => {
  Sach.find()
    .select('ten gia giamgia _id hinh noidung namxuatban nhaxuatban theloaisach')
    .populate("nhaxuatban", "tennxb")
    .populate("theloaisach", "ten")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        sach: docs.map(doc => {
          return {
            _id: doc._id,
            ten: doc.ten,
            gia: doc.gia,
            giamgia: doc.giamgia,
            hinh: doc.hinh,
            noidung: doc.noidung,
            namxuatban: doc.namxuatban,
            theloaisach: doc.theloaisach,
            nhaxuatban: doc.nhaxuatban,
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

//lấy id sách
exports.get_id_sach = (req, res, next) => {
  const id = req.params.sachId;
  Sach.findById(id).select('ten gia _id hinh namxuatban noidung nhaxuatban theloaisach')
    .populate("nhaxuatban", "tennxb")
    .populate("theloaisach", "ten")
    .exec()
    .then(doc => {
      console.log("From data", doc);
      if (doc) {
        res.status(200).json(
          {
            sach: doc,
            request: {
              type: 'GET',
              url: 'http://localhost:2000/sach/'
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

//thêm sách
exports.them_sach = (req, res, next) => {
  const sach = new Sach({
    _id: new mongoose.Types.ObjectId(),
    ten: req.body.ten,
    gia: req.body.gia,
    giamgia: req.body.giamgia,
    hinh: req.file.path,
    noidung: req.body.noidung,
    namxuatban: req.body.namxuatban,
    theloaisach: req.body.idtheloaisach,
    nhaxuatban: req.body.idnhaxuatban,
  });
  sach.save().then(result => {
    console.log(result);
    res.redirect("../Sach");

  })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });

}

//xoá sách
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
