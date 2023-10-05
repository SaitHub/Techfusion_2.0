const userModel=require('../model/userSchema');
const contactModel=require('../model/contactSchema');
const postRegisterUser=async(req,res)=>{
    try{
        console.log(req.body);
        const user = new userModel({...req.body});
        const data=await user.save();
        console.log(data);
        res.status(201).json({msg:"Successfully registered"})
    }
    catch(err){
        console.log(err);
        res.status(400).json({msg:err.message});
    }
}
const postContact=async(req,res)=>{
    try{
        console.log(req.body);
        const contact = new contactModel({...req.body});
        const data=await contact.save();
        console.log(data);
        res.status(201).json({msg:"Response Recorded!"})
    }
    catch(err){
        console.log(err);
        res.status(400).json({msg:err.message});
    }
}

module.exports={postRegisterUser,postContact};
