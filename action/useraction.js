"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { Sawarabi_Gothic } from "next/font/google"
import { error } from "console"



export const initiate = async(amount,to_username,paymentform) =>{
    await connectDB()
    var instance = new Razorpay({key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET})

    let options = {
        amount : Number.parseInt(amount) * 100,
        currency : "INR",
    }
    let x = await instance.orders.create(options)

    await Payment.create({oid:x.id,amount : amount/100,to_user : to_username,name : paymentform.name,message : paymentform.message})
    return x
}

export const fetchuser = async(username) => {
    await connectDB()
    let u = await User.findOne({username:username})
    let user = u.toObject({flattenObjectIds:true})
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({to_user:username,done : true}).sort({amount:-1}).limit(10).lean()
    return p;
}

export const updateProfile = async (data,oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)
    if(oldusername !== ndata.username){
        let u  = await User.findOne({username : ndata.username})
        if(u){
            return {error:  "Username already exists"}
        }
        await User.updateOne({email : ndata.email},ndata)

        await Payment.updateMany({to_user : oldusername},{top_user : ndata.username})
    }
    else{

        await User.updateOne({email : ndata.email},ndata)
    }
}