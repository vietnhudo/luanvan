const express = require('express');
const env = require('dotenv');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const path =require("path");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');




//kết nối router
const SachRouter = require('./router/Sach')
const TheLoaiSachRouter = require('./router/TheLoaiSach')

//xử lý router
const XuLyRouter = require('./router/Xulyrouter')

//Sách
app.use('/sach', XuLyRouter);


env.config();
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.kim46.mongodb.net/${process.env.MONGO_DB_DATA}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, //tạo đường link người dùng mới
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('Đã kết nối dữ liệu');
});
mongoose.Promise = global.Promise;

//import
app.set("view engine", "ejs")
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})

//Load public
app.use('/css', express.static(path.resolve(__dirname, '../public/css')))
app.use('/img', express.static(path.resolve(__dirname, "../public/img")))
app.use('/js', express.static(path.resolve(__dirname, "../public/js")))
app.use('/lib', express.static(path.resolve(__dirname, "../public/lib")))
app.use('/scss', express.static(path.resolve(__dirname, "../public/scss")))


//lấy giao diện
app.use('/', XuLyRouter);




// event router (phần xử lý)
app.use('/api/sach', SachRouter);
app.use('/api/theloaisach', TheLoaiSachRouter);

app.use((req,res,next)=>{
    const error = new Error('Không kết nối');
    error.status= 404;
    next(error);
})

app.use((error, req,res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;