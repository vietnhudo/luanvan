const mongoose = require('mongoose');

const TacGiaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tentacgia: {type: String, require: true},
    noisinh: {type: String, require: true},
    tieusu: {type: String, require: true}
});

module.exports = mongoose.model('TacGia', TacGiaSchema);

