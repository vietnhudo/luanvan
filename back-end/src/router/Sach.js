const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const Sach = require('../model/Sach');
// get list sách


router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Get list danh sach '
    })
})
router.post('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Get POST danh sach '
    })
})

module.exports = router;
