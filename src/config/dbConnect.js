const mongoose=require("mongoose");

const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            // useCreateIndex:true,
            // useFindAndModify:true,
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log("DB connected successfully");
    }catch(error){
        console.log("Error ${error.message}");
    }
}

module.exports=dbConnect;