const mongoose=require("mongoose")
const adminSchema=mongoose.Schema({
    name:{
        type:String,unique:true,required:[true,"name is required"],
    },
    email:{
        type:String,unique:true,required:[true,"email is required"]
    },
    password:{
        type:Number,required:[true,"password is required"],
    }
})
module.exports=mongoose.model("admin",adminSchema)