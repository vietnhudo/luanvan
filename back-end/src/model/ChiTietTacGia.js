const mongoose = require('mongoose');

const ChiTietTacGiaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sach: {type: mongoose.Schema.Types.ObjectId, ref: 'Sach', require: true},
    tacgia: {type: mongoose.Schema.Types.ObjectId, ref: 'TacGia', require: true},
    chubien: {type: String, require: true},
});

module.exports = mongoose.model('ChiTietTacGia', ChiTietTacGiaSchema);


