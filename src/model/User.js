const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");

const userSchema=mongoose.Schema({
    firstname:{
        required:[true,"First Name is required"],
        type:String,
    },
    lastname:{
        required:[true,"Last Name is required"],
        type:String,
    },
    email:{
        required:[true,"Email is required"],
        type:String,
    },
    password:{
        required:[true,"password is required"],
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},
{
        timestamp:true,
}

);

//Hash password

userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next()
    console.log("am been called");

})

const User=mongoose.model("User",userSchema);
module.exports=User;