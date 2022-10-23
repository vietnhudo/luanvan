const mongoose = require('mongoose');

const SachSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ten: {type: String, require: true},
    gia: {type: Number, require:true},
});

module.exports = mongoose.model('Sach', SachSchema);