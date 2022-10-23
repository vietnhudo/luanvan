const {default: axios} = require('axios');
// const { data } = require('jquery');
require('dotenv').config();

exports.sach = (req, res) => {
    axios
      .get(process.env.NODEJS_APP_URL + "/api/sach")
      .then(function (response) {
        res.render("Sach", { sach: response.data.sach });
        console.log(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  };