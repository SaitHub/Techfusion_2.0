const mongoose=require('./connection')
const contactSchema=new mongoose.Schema({
    name:'String',
    email:'String',
    suggestions:'String',
})
const contactModel=mongoose.model('Contact',contactSchema);
module.exports=contactModel;