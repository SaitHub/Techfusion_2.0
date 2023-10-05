const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to Mongoose")
}).catch(err => console.log(err))

module.exports = mongoose;