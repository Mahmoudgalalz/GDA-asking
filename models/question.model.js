const mongoose =require('mongoose')
const {Schema}=mongoose

const question=new Schema({
    name:String,
    question:String,
    date:{type:Date, default:Date.now}
})
module.exports = mongoose.model('question', question)
