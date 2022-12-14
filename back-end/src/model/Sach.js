const mongoose = require('mongoose');

const SachSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ten: {type: String, require: true},
    gia: {type: Number, require:true},
    giamgia: {type: Number, require:true},
    noidung: {type: String, require:true},
    namxuatban: {type: Number, require:true},
    hinh: {type: String, require:true},
    theloaisach: {type: mongoose.Schema.Types.ObjectId, ref: 'TheLoaiSach', require: true},
    nhaxuatban: {type: mongoose.Schema.Types.ObjectId, ref:'NhaXuatBan', require: true},
});

module.exports = mongoose.model('Sach', SachSchema);