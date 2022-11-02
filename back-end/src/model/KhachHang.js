const mongoose = require('mongoose');

const KhachHangSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    diachi: {type: String, required: true},
    sodienthoai: {type: Number, required:true},
});

module.exports = mongoose.model('KhachHang', KhachHangSchema);


