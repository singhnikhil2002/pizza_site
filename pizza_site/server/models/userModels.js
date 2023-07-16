const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
     name:{
         type:String,
         required:[true,'Name is required']
     },
     email:{
         type:String,
         required:[true,'Email is required']
     },
     password:{
         type:String,
         required:[true,'Password is required']
     },
     isAdmin:{
         type:Boolean,
         required:false
     },
    },{timeStamps:true})

 module.exports = mongoose.model('User', userSchema)
