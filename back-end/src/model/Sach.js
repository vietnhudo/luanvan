const mongoose = require('mongoose');

const SachSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ten: {type: String, require: true},
    gia: {type: Number, require:true},
    hinh:{type: String, require:true},
    // ngonngu:{type: String, require: true},
    // dichgia:{type: String, require:true},
    // noidung:{type: String, require: true},
    // giamgia:{type: Number, require: true},
    // namxuatban: {type:Number, require: true},
    // danhmucsach: {type: mongoose.Schema.Types.ObjectId, ref: 'DanhMucSach', require: true},
    // nhaxuatban: {type: mongoose.Schema.Types.ObjectId, ref:'NhaXuatBan', require: true},
});

module.exports = mongoose.model('Sach', SachSchema);