const mongoose = require("mongoose")

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        providerId:{type:String,required:false},
        displayName:{type:String,required:true},
        email:{type:String,required:true},
        idToken:{type:String,required:false},
    },
    {timestamps:true}
    )
)

module.exports = User