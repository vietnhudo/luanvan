const mongoose = require('mongoose');

const NhaXuatBanSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tennxb: {type: String, require: true},
    quocgia: {type: String, require: true},
});

module.exports = mongoose.model('NhaXuatBan', NhaXuatBanSchema);