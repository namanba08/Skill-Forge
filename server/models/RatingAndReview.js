const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    rating:{
        type:Number,
    },
    review:{
        type:String,
        trim:true,
    }
});

module.exports = mongoose.model("RatingAndReview", rateSchema);
