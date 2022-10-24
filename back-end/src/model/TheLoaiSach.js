const mongoose = require('mongoose');

const TheLoaiSachSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ten: {type: String, require: true},
});

module.exports = mongoose.model('TheLoaiSach', TheLoaiSachSchema);