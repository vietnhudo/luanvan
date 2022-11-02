const {default: axios} = require('axios');
// const { data } = require('jquery');
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
    axios.get(process.env.NODEJS_APP_URL + "/api/sach")
      .then(function (response) {
        res.render("Sach_Them", { sach: response.data.sach });
        console.log(response.data);
      })
      .catch((err) => {
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
  axios.get(process.env.NODEJS_APP_URL + "/api/chitiettacgia")
    .then(function (response) {
      res.render("ChiTietTacGia_Them", { chitiettacgia: response.data.chitiettacgia });
      console.log(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};

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
