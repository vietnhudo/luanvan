const mongoose = require('mongoose');
const TacGia= require('../model/TacGia');
 
//lấy danh sách tác giả
exports.get_all_tacgia = (req,res,next)=>{
    TacGia.find()
   .select('tentacgia _id noisinh tieusu')
   .exec()
   .then((docs) => {
    const response = {
        count: docs.length,
        tacgia: docs.map(doc => {
            return{
                tentacgia: doc.tentacgia,
                noisinh: doc.noisinh,
                tieusu: doc.tieusu,
                _id: doc._id,
                request:{
                    type: 'GET',
                    url:'http://localhost:2000/api/tacgia/' + doc._id
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

// lấy dữ liệu tác giả
exports.lay_danhsach_tacgia = (req,res,next)=>{
    TacGia.find()
   .select('tentacgia _id noisinh tieusu')
   .exec()
   .then((docs) => {
    const response = {
        count: docs.length,
        tacgia: docs.map(doc => {
            return{
                tentacgia: doc.tentacgia,
                noisinh: doc.noisinh,
                tieusu: doc.tieusu,
                _id: doc._id,
                request:{
                    type: 'GET',
                    url:'http://localhost:2000/api/tacgia/' + doc._id
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

//lấy id tác giả
exports.get_tacgia_id = (req,res,next)=>{
    const id = req.params.dmTacGiaId;
    TacGia.findById(id).select('tentacgia _id noisinh tieusu')
    .exec()
    .then(doc =>{
        console.log("From data",doc);
        if(doc){
            res.status(200).json(
                {
                    tacgia:doc,
                    request:{
                        type: 'GET',
                        url: 'http://localhost:2000/api/tacgia/'
                    }
                }
            );
        }else{
            res.status(400).json({message: 'không lấy dc dữ liệu'})
        }
        
    })
    .catch(err =>{

    console.log(err);
    res.status(500).json({ error:err})}
    );
}

//thêm tác giả
exports.them_tacgia = (req,res,next)=>{
    const tacgia = new TacGia({
        _id: new mongoose.Types.ObjectId(),
        tentacgia: req.body.tentacgia,
        noisinh: req.body.noisinh,
        tieusu: req.body.tieusu
    });
    tacgia.save().then(result =>{
        console.log(result);
        res.redirect("../tacgia");
    })
    .catch(err => {console.log(err);
    res.status(500).json({
        error:err
    })
});
    
}


 //xóa tác giả
 exports.xoa_tacgia = (req,res,next)=>{
    const id = req.params.idtacgia
    TacGia.remove({_id:id})
   .exec()
  .then(result =>{
   res.status(200).json({
       message: "Xóa tác giả",
       request:{
           type: 'POST',
           url: 'http://localhost:2000/tacgia/',
       }
   });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
  });
 }

 //sửa tác giả
 exports.sua_tacgia = (req, res, next) => {
    var dataTacGia = {
        tentacgia: req.body.tentacgia,
        noisinh: req.body.noisinh,
        tieusu: req.body.tieusu
    };
    TacGia.findByIdAndUpdate(req.body.dmTacGiaId, dataTacGia)
      .exec()
      .then(result => {
        res.redirect("../../tacgia");
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  }