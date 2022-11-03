const mongoose = require('mongoose');
const ChiTietTacGia= require('../model/ChiTietTacGia');
// lấy dữ liệu chi tiết tác giả
exports.lay_danhsach_chitiettacgia = (req,res,next)=>{
    ChiTietTacGia.find()
   .select('_id chubien')
   .exec()
   .then((docs) => {
    const response = {
        count: docs.length,
        chitiettacgia: docs.map(doc => {
            return{
                _id: doc._id,
                chubien: doc.chubien,
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
        chubien: req.body.chubien
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
