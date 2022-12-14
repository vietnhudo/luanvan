const mongoose = require('mongoose');
const Dathang = require('../model/DatHang');


//thu nhập
// exports.get_thunhap = async(req,res,next)=>{
//     const date = new Date();
//     const lastMonth = new Date(date.setMonth(date.getMonth()-1))
//     const nextMoth = new Date(new Date().getMonth(lastMonth.getMonth()-1));

//     try{
//         const income = await Dathang.aggregate([
//             {
//                 $match: {createdAt:{$gte: nextMoth}}
//             },
//             {
//                 $project:{
//                 month: {$month: "$createdAt"},
//                 giam: "$gia",
//                 },
//                     $group: {
//                         _id:"$month",
//                         total: {$sum: "$giam"}
//                     },
//             }
//         ])
//         res.status(200).json(income);
//     }catch(err){
//         res.status(500).json(err)
//     }
// }

//lấy khách hàng
exports.get_khachhang_dathang = async (req,res,next)=>{
    Dathang.find({khachhang: req.params.khachhangId}).select("sachs sach diachi hinh khachhang tenkhach trangthai sodienthoai createdAt gia _id")
    .populate("khachhang","username")
    .populate("sachs.sach")
    .exec().then(docs =>{
        res.status(200).json({
            count: docs.length,
            dathang: docs.map(doc =>{
                return{
                    _id: doc._id,
                    sachs: doc.sachs,
                    gia:doc.gia,
                    diachi:doc.diachi,
                    tenkhach: doc.tenkhach,
                    trangthai: doc.trangthai,
                    khachhang:doc.khachhang,
                    sodienthoai: doc.sodienthoai,
                    createdAt: doc.createdAt,
                    request:{
                        type: 'GET' ,
                        url: 'http://localhost:2000/dathang/' + doc._id
                    }
                }
            }),
            
        });
    }).catch(err =>{
        res.status(500).json({
            error:err
        });
    });
}

//lấy hoá đơn
exports.get_hoadon = async(req,res,next)=>{
    Dathang.find().select("sachs sach diachi tenkhach hinh khachhang trangthai createdAt sodienthoai gia _id")
    .populate("khachhang","username")
    .populate("sachs.sach")
    .exec().then(docs =>{
        res.status(200).json({
            count: docs.length,
            dathang: docs.map(doc =>{
                return{
                    _id: doc._id,
                    sachs: doc.sachs,
                    gia:doc.gia,
                    diachi:doc.diachi,
                    tenkhach: doc.tenkhach,
                    trangthai: doc.trangthai,
                    khachhang:doc.khachhang,
                    sodienthoai: doc.sodienthoai,
                    createdAt: doc.createdAt,
                    request:{
                        type: 'GET' ,
                        url: 'http://localhost:2000/dathang/' + doc._id
                    }
                }
            }),
            
        });
    }).catch(err =>{
        res.status(500).json({
            error:err
        });
    });
}

// lấy tất cả dathang
exports.lay_danhsach_dathang = async(req,res,next)=>{
    Dathang.find().select("sachs sach diachi hinh khachhang tenkhach trangthai createdAt sodienthoai gia _id")
    .populate("khachhang","username")
    .populate("sachs.sach")
    .exec().then(docs =>{
        res.status(200).json({
            count: docs.length,
            dathang: docs.map(doc =>{
                return{
                    _id: doc._id,
                    sachs: doc.sachs,
                    gia:doc.gia,
                    diachi:doc.diachi,
                    tenkhach: doc.tenkhach,
                    trangthai: doc.trangthai,
                    nguoidung:doc.nguoidung,
                    sodienthoai: doc.sodienthoai,
                    createdAt: doc.createdAt,
                    request:{
                        type: 'GET' ,
                        url: 'http://localhost:2000/dathang/' + doc._id
                    }
                }
            }),
            
        });
    }).catch(err =>{
        res.status(500).json({
            error:err
        });
    });
}

//thêm đặt hàng
exports.them_dathang =  async (req,res,next)=>{

    
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
      });
    
      var today = new Date();
      var date =
        today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date  + " " + time;
      
      var nextday = new Date();
      var nextdate = (nextday.getDate()+3)+ "-"+(nextday.getMonth()+1) + "-"+ nextday.getFullYear();
      var nexttime = nextday.getHours() + ":" + nextday.getMinutes() + ":" + nextday.getSeconds();
      var nextDateTime = nextdate  + " " + nexttime;
      let output = `<table width='500' height = '20' border = '1'><tr><th>STT</th><th>ID sản phẩm</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Giá</th></tr>`;
    //   req.body.sachs.map((sachaa, index) => {
       
    //         output += `<tr><td>${index + 1}</td><td>${sachaa.sach}</td><td>${sachaa.ten}</td><td>${sachaa.soluong}</td><td> ${sachaa.gia}</td></tr>`;
        
    //   });
      output += "</table>"
      
      const newDathang = new Dathang(req.body);
      try{
       const saveDatHang = await newDathang.save();
       res.status(200).json(saveDatHang);
      }catch(err){
       res.status(500).json(err);
      }
  
}

 //xóa dat hang
 exports.xoa_dathang = async (req,res,next)=>{
    try{
        await Dathang.findByIdAndDelete(req.params.id);
        res.status(200).json("Đơn hàng đã xóa");
    }catch(err){
        res.status(500).json(err);
    }
 }

 //sửa đặt hàng
 exports.sua_dathang = async (req,res,next)=>{
  
    var daTaDatHang = {
        trangthai: req.body.trangthai,
        gia: req.body.gia,
        tenkhach: req.body.tenkhach,
        diachi:req.body.diachi,
        sodienthoai: req.body.sodienthoai,
      };
    Dathang.findByIdAndUpdate(req.body.dathangId, daTaDatHang)
    .exec()
    .then(result =>{
        res.redirect("../../dathang");
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
 }

 //get id đặt hàng
 exports.get_dathang_id = (req,res,next)=>{
    Dathang.findById(req.params.dathangId)
    .populate("sachs","soluong")
    .populate("khachhang","username")
    .populate("sachs.sach")
     .exec()
     .then(dathang =>{
         if(!dathang){
             return res.status(404).json({
                 message: 'Không tìm thấy đơn hàng'
             });
         }
         res.status(200).json({
            dathang: dathang,
            request:{
                type: 'GET',
                url: 'http://localhost:2000/dathang/'
            }
         });
     }).catch(err =>{
         res.status(500).json({
            error: err
         });
     })
}