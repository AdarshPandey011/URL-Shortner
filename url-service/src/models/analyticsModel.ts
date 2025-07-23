
import mongoose, { Mongoose } from "mongoose";

const analyticsSchema = new mongoose.Schema({
    shortUrl:{type:String},
    timeStamp: {type:Date,default:Date.now()},
    ip:{type:String}
})

const analyticsModel = mongoose.model("shortUrlAnalytics",analyticsSchema)

export default analyticsModel