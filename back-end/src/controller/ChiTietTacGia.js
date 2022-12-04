const mongoose = require('mongoose');
const ChiTietTacGia= require('../model/ChiTietTacGia');


exports.get_laytacgia_trongsach = (req, res, next) => {
    ChiTietTacGia.find({ sach: req.params.dlsachId })
        .select('chubien _id sach tacgia')
        .populate("sach", "ten")
        .populate("tacgia", "tentacgia")
        .exec()
        .then((docs) => {
            const response = {
                count: docs.length,
                chitiettacgia: docs.map(doc => {
                    return {
                        chubien: doc.chubien,
                        sach: doc.sach,
                        tacgia: doc.tacgia,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:2000/chitiettacgia/' + doc._id
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


exports.get_insach_intacgia = (req, res, next) => {
    ChiTietTacGia.find({ tacgia: req.params.dmTacGiaId })
        .select('chubien _id sach tacgia')
        .populate("sach")
        .populate("tacgia", "tentacgia")
        .exec()
        .then((docs) => {
            const response = {
                count: docs.length,
                chitiettacgia: docs.map(doc => {


                    return doc.sach


                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.get_id_chitiettacgia = (req, res, next) => {
    const id = req.params.dmChiTietTacGiaId;
    ChiTietTacGia.findById(id).select('chubien _id sach tacgia')
        .populate("sach", "ten")
        .populate("tacgia", "tentacgia")
        .exec()
        .then(doc => {
            console.log("From data", doc);
            if (doc) {
                res.status(200).json(
                    {
                        chitiettacgia: doc,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:2000/chitiettacgia/'
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

// lấy dữ liệu chi tiết tác giả
exports.lay_danhsach_chitiettacgia = (req,res,next)=>{
    ChiTietTacGia.find()
   .select('_id chubien sach tacgia')
   .populate("sach", "ten")
   .populate("tacgia", "tentacgia")
   .exec()
   .then((docs) => {
    const response = {
        count: docs.length,
        chitiettacgia: docs.map(doc => {
            return{
                _id: doc._id,
                chubien: doc.chubien,
                tacgia: doc.tacgia,
                sach: doc.sach,
                request:{
                    type: 'GET',
                    url:'http://localhost:2000/api/chitiettacgia/' + doc._id
                }
            }
        })
    };
    res.status(200).json(response);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    if(docs.length >=0){
        res.status(200).json(docs)
    }else{
        res.status(404).json({message: 'lỗi'})
    }
    
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({error: err});
   });
}

//thêm chi tiết tác giả
exports.them_chitiettacgia = (req,res,next)=>{
    const chitiettacgia = new ChiTietTacGia({
        _id: new mongoose.Types.ObjectId(),
        chubien: req.body.chubien,
        sach: req.body.idsach,
        tacgia:req.body.idtacgia
    });
    chitiettacgia.save().then(result =>{
        console.log(result);
        res.redirect("../chitiettacgia");
    })
    .catch(err => {console.log(err);
    res.status(500).json({
        error:err
    })
});
    
}


 //xóa chi tiết tác giả
 exports.xoa_chitiettacgia = (req,res,next)=>{
    const id = req.params.idchitiettacgia
    ChiTietTacGia.remove({_id:id})
   .exec()
  .then(result =>{
   res.status(200).json({
       message: "Xóa chi tiết tác giả",
       request:{
           type: 'POST',
           url: 'http://localhost:2000/chitiettacgia/',
       }
   });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
  });
 }
