const mongoose = require('mongoose');

const DathangSchema = mongoose.Schema({
    khachhang: { type: mongoose.Schema.Types.ObjectId, ref: "KhachHang" },
    tenkhach: {type: String},
    email: {type: String},
    sachs: [
      {
        sach: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Sach",
        },
        soluong: {
          type: Number,
          default: 1,
        },
      },
    ],
    gia: { type: Number },
    diachi: { type: Object, required: true },
    sodienthoai: {type: Number, required: true},
    trangthai: { type: String, default: "đang xử lý đơn hàng" },
  },{
    timestamps: true
});

module.exports = mongoose.model('DatHang', DathangSchema);