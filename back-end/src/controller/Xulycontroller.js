const {default: axios} = require('axios');
const { data } = require('jquery');
require('dotenv').config();

exports.trangchu = (req, res) => {
    res.render('TrangChu');
};
//sách
exports.sach = (req, res) => {
    axios.get(process.env.NODEJS_APP_URL + "/api/sach")
      .then(function (response) {
        res.render("Sach", { sach: response.data.sach });
        console.log(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  exports.themsach = (req, res) => {
    var _id = req.query.id;
    function getTheLoaiSach(){
      return axios.get(process.env.NODEJS_APP_URL + "/api/theloaisach/");
    }
    function getNhaXuatBan(){
      return axios.get(process.env.NODEJS_APP_URL + "/api/nhaxuatban/");
    }
    Promise.all([getTheLoaiSach(),getNhaXuatBan()]).then(function(result){
      const theloaisach = result[0].data.theloaisach;
      const nhaxuatban = result[1].data.nhaxuatban;
      res.render("Sach_Them",{
        theloaisach: theloaisach,
        nhaxuatban: nhaxuatban,
      });
    }).catch((err)=>{
      res.send(err);
    });
};
exports.suasach = (req, res) => {
  var _id = req.query.id;
  function getSach(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/sach/" + _id);
  }
  function getTheLoaiSach(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/theloaisach/");
  }
  function getNhaXuatBan(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/nhaxuatban/");
  }
  Promise.all([getSach(),getTheLoaiSach(),getNhaXuatBan()]).then(function(result){
    const sach = result[0].data.sach;
    const theloaisach = result[1].data.theloaisach;
    const nhaxuatban = result[2].data.nhaxuatban;
    res.render("Sach_Sua",{
      sach: sach,
      theloaisach: theloaisach,
      nhaxuatban: nhaxuatban,
    });
  }).catch((err)=>{
    res.send(err);
  });
}; 

//thể loại sách
  exports.theloaisach = (req, res) => {
    axios
      .get(process.env.NODEJS_APP_URL + "/api/theloaisach")
      .then(function (response) {
        res.render("TheLoaiSach", { theloaisach: response.data.theloaisach });
        console.log(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  exports.themtheloaisach = (req, res) => {
    axios.get(process.env.NODEJS_APP_URL + "/api/theloaisach")
      .then(function (response) {
        res.render("TheLoaiSach_Them", { theloaisach: response.data.theloaisach });
        console.log(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
};

exports.suatheloaisach = (req, res) => {
  var _id = req.query.id;
  axios
    .get(process.env.NODEJS_APP_URL + "/api/theloaisach/" + _id)
    .then(function (response) {
      console.log(response.data);
      res.render("TheLoaiSach_Sua", { theloaisach: response.data.theloaisach });
    })
    .catch((err) => {
      res.send(err);
    });
};


//nhà xuất bản
exports.nhaxuatban = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/nhaxuatban")
    .then(function (response) {
      res.render("NhaXuatBan", { nhaxuatban: response.data.nhaxuatban });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.themnhaxuatban = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/nhaxuatban")
    .then(function (response) {
      res.render("NhaXuatBan_Them", { nhaxuatban: response.data.nhaxuatban });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.suanhaxuatban = (req, res) => {
  var _id = req.query.id;
  axios
    .get(process.env.NODEJS_APP_URL + "/api/nhaxuatban/" + _id)
    .then(function (response) {
      console.log(response.data);
      res.render("NhaXuatBan_Sua", { nhaxuatban: response.data.nhaxuatban });
    })
    .catch((err) => {
      res.send(err);
    });
};

//tác giả
exports.tacgia = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/tacgia")
    .then(function (response) {
      res.render("TacGia", { tacgia: response.data.tacgia });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.themtacgia = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/tacgia")
    .then(function (response) {
      res.render("TacGia_Them", { tacgia: response.data.tacgia });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.suatacgia = (req, res) => {
  var _id = req.query.id;
  axios
    .get(process.env.NODEJS_APP_URL + "/api/tacgia/" + _id)
    .then(function (response) {
      console.log(response.data);
      res.render("TacGia_Sua", { tacgia: response.data.tacgia });
    })
    .catch((err) => {
      res.send(err);
    });
};

//chi tiết tác giả
exports.chitiettacgia = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/chitiettacgia")
    .then(function (response) {
      res.render("ChiTietTacGia", { chitiettacgia: response.data.chitiettacgia });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.themchitiettacgia = (req, res) => {

  var _id = req.query.id;
  function getSach(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/sach/");
  }
  function getTacGia(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/tacgia/");
  }
  Promise.all([getSach(),getTacGia()]).then(function(result){
    const sach = result[0].data.sach;
    const tacgia = result[1].data.tacgia;
    res.render("ChiTietTacGia_Them",{
      sach: sach,
      tacgia: tacgia,
    });
  }).catch((err)=>{
    res.send(err);
  });
};
exports.suachitiettacgia = (req, res) => {
  var _id = req.query.id;
  function getChiTietTacGia(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/chitiettacgia/"+ _id);
  }
  function getSach(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/sach/");
  }
  function getTacGia(){
    return axios.get(process.env.NODEJS_APP_URL + "/api/tacgia/");
  }
  Promise.all([getChiTietTacGia(),getSach(),getTacGia()]).then(function(result){
    const chitiettacgia = result[0].data.chitiettacgia;
    const sach = result[1].data.sach;
    const tacgia = result[2].data.tacgia;
    res.render("ChiTietTacGia_Sua",{
      chitiettacgia: chitiettacgia,
      sach: sach,
      tacgia: tacgia,
    });
  }).catch((err)=>{
    res.send(err);
  });
}

//khách hàng
exports.khachhang = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/khachhang")
    .then(function (response) {
      res.render("KhachHang", { khachhang: response.data.khachhang });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};

//bài viết
exports.baiviet = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/baiviet")
    .then(function (response) {
      res.render("BaiViet", { baiviet: response.data.baiviet });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.thembaiviet = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/baiviet")
    .then(function (response) {
      res.render("BaiViet_Them", { baiviet: response.data.baiviet });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.suabaiviet = (req, res) => {
  var _id = req.query.id;
  axios
    .get(process.env.NODEJS_APP_URL + "/api/baiviet/" + _id)
    .then(function (response) {
      console.log(response.data);
      res.render("BaiViet_Sua", { baiviet: response.data.baiviet });
    })
    .catch((err) => {
      res.send(err);
    });
};

//đặt hàng
exports.dathang = (req, res) => {
  axios.get(process.env.NODEJS_APP_URL + "/api/dathang")
    .then(function (response) {
      res.render("DatHang", { dathang: response.data.dathang });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.hoadon = (req, res) => {
  axios
    .get(process.env.NODEJS_APP_URL + "/api/dathang")
    .then(function (response) {
      res.render("HoaDon", { dathang: response.data.dathang });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.suadathang = (req, res) => {
  var _id = req.query.id;
  axios
    .get(process.env.NODEJS_APP_URL + "/api/dathang/" + _id)
    .then(function (responseDatHang) {
      console.log(responseDatHang.data);
      res.render("DatHang_Sua", { dathang: responseDatHang.data.dathang });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.chitietdonhang = (req, res) => {
  var _id = req.query.id;
  axios
    .get(process.env.NODEJS_APP_URL + "/api/dathang/" + _id)
    .then(function (responseDatHang) {
      console.log(responseDatHang.data);
      res.render("ChiTietDonHang", { dathang: responseDatHang.data.dathang });
    })
    .catch((err) => {
      res.send(err);
    });
};