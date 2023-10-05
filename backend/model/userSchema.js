const mongoose=require('./connection')
const userSchema = new mongoose.Schema({
    Name:'String',
    Email:'String',
    Phone_No:'String',
    College_Name:'String',
    Year_of_Study:'String',
    Events:'String',
    Transaction_id:'String',
    Payment_Screenshot:'String',
})
userSchema.pre('save', async function(next){
    try {
        const existingUser = await userModel.findOne({ Email: this.Email });
        if (existingUser) {
          const err = new Error('You are already registered');
          err.status = 400;
          return next(err);
        }
    
        next();
      } catch (error) {
        next(error);
      }
})
const userModel=mongoose.model('UserRegistration',userSchema);
module.exports=userModel;
