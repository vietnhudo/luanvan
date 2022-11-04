const mongoose = require('mongoose');

const BaiVietSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ten: {type: String, require: true},
    noidung: {type: String, require:true},
    hinh: {type: String, require:true},
});

module.exports = mongoose.model('BaiViet', BaiVietSchema);