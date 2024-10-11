const mongoose=require("mongoose")
const empSchema=mongoose.Schema({
    firstName:{
        type:String,required:[true,"firstname is required"],
    },
    lastName:{
        type:String,required:[true,"lastname is required"]
    },
    email:{
        type:String,required:[true,"Email is required"],
    },
    dob:{
        type:Date,required:[true,"dob is required"]
    },
    gender:{
        type:String,required:[true,"gender is required"],
    },
    education:{
        type:String,required:[true,"Education is required"]
    },
    company:{
        type:String,required:[true,"Company is required"],
    },
    experience:{
        type:Number,required:[true,"Exp is required"]
    },
    
    package:{
        type:Number,required:[true,"Package is required"]
    }
    
})
module.exports=mongoose.model("emp",empSchema)