const router=require('express').Router();
const {postRegisterUser,postContact}=require('./registerUser');
router.route('/register')
    .post(postRegisterUser);
router.route('/contact')
    .post(postContact)
module.exports=router;