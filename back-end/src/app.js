const express = require('express');
// const env = require('dotenv');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//kết nối router
const SachRouter = require('./router/Sach')

mongoose.connect(
    `mongodb+srv://nhuviet:nhuviet123456@cluster0.kim46.mongodb.net/dbbookstore?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true, //tạo đường link người dùng mới
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('Đã kết nối dữ liệu');
});
mongoose.Promise = global.Promise;

//import
app.use(morgan('dev'));
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


// event router (phần xử lý)
app.use('/sach',SachRouter);

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