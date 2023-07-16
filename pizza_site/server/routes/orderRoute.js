const express = require("express")
const router = express.Router();
const { v4: uuidv4} = require('uuid')
const stripe = require('stripe')('sk_test_51NSmVGSFxYM7xezHKlNtICxBuTpHBWJSfWXwLSoP8B36abevnrsitoC8S5NzCdJHGXfwNNcoyXKi0OYoMqo7aqdF00OXWDAUPR')

const Order = require('../models/orderModel')

router.post('/placeOrder', async (req,res) => {
  

    const {token,subTotal,currentUser,cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const paymentIntent = await stripe.paymentIntents.create({
            amount:subTotal*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email,
        },{
            idempotencyKey: uuidv4()
        })

        if(paymentIntent){
            const newOrder= new Order ({
                name:currentUser.name,
                email:currentUser.email,
                userId:currentUser._id,
                orderItems:cartItems,
                orderAmount:subTotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip,
                },
                // transactionId: paymentIntent.source.id,
            });
            newOrder.save();
            res.send('Payment Success')
            } else{
            res.send('Payment Failed')
        }
    } catch (error) {
        res.status(400).json({
            message:'Something went wrong',
            error:error.stack
        })
    }
})


router.post('/getUserOrder',async (req,res) => {
    const {userid} = req.body;
    try {
        const orders = await Order.find({ userid });
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({
            message:"something went wrong",
            error: error.stack,
        })
    }
})

module.exports = router;
