
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
  //sửa thể loại sách
  exports.sua_theloaisach = (req,res,next)=>{
    var dataTheLoaiSach = {
        ten: req.body.ten,
      };
      TheLoaiSach.findByIdAndUpdate(req.body.idtheloaisach, dataTheLoaiSach)
    .exec()
    .then(result =>{
        res.redirect("../../theloaisach");
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
    
 }

 
 // lấy id thể loại sách
exports.get_theloaisach_id = (req,res,next)=>{
    const id = req.params.idtheloaisach;
    TheLoaiSach.findById(id).select('ten _id')
    .exec()
    .then(doc =>{
        console.log("From data",doc);
        if(doc){
            res.status(200).json(
                {
                    theloaisach:doc,
                    request:{
                        type: 'GET',
                        url: 'http://localhost:2000/theloaisach/' + id
                    }
                }
            );
        }else{
            req.status(400).json({message: 'không lấy dc dữ liệu'})
        }
        
    })
    .catch(err =>{

    console.log(err);
    res.status(500).json({ error:err})}
    );

}
  