const express=require('express')
const router=express.Router();
const questions = require('../models/question.model');
router.post('/send',(req,res)=>{
    const data=new questions({
        name:req.body.name,
        question:req.body.question
    })
    try{
        const dataToSave=data.save();
        res.status(200).json(dataToSave);
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }

})

router.get('/getAll',async(req,res)=>{
    const all = await questions.find();
    res.send(all);
})

module.exports=router;