const express = require('express');
const router = express.Router();

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
