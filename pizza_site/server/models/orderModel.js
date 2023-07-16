const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'order name required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    userId:{
        type:String,
        // required:true
    },
    orderItems: [],
    shippingAddress:{
        type:Object,
    },
    orderAmount:{
        type:String,
        // required:true
    },
    isDelivered:{
        type:String,
        // required:true
    },
    transactionId:{
        type:String,
        // required:true
    },
},{timeStamps:true})

module.exports = mongoose.model('Order',orderSchema)
