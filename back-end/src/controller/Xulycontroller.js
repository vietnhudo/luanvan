const {default: axios} = require('axios');
// const { data } = require('jquery');
require('dotenv').config();

exports.trangchu = (req, res) => {
    res.render('TrangChu');
};

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
        res.render("Sach-Them", { sach: response.data.sach });
        console.log(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
};

  // exports.theloaisach = (req, res) => {
  //   axios
  //     .get(process.env.NODEJS_APP_URL + "/api/theloaisach")
  //     .then(function (response) {
  //       res.render("TheLoaiSach", { theloaisach: response.data.theloaisach });
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       res.send(err);
  //     });
  // };
