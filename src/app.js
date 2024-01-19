//password of mongodb is Shubham12

const express=require("express");
const dotenv=require("dotenv");
const dbConnect=require("./config/dbConnect");
const {errorHandler,notFound}=require("./middlewares/errorMiddleware");
const {registerUser} =require("./controllers/users/usersCtrl");

const userRoute=require("./routes/users/usersRoute")

//env
dotenv.config();
const app=express();

const logger=(req,res,next)=>{
    console.log("An a logger");
    next();

}




app.use(logger);

//dbconnect
dbConnect();

//middleware
app.use(express.json());
//const app=express();
//app.post('/register',registerUser)
//routes
app.use("/api/users",userRoute)

//error handler
app.use(notFound);
app.use(errorHandler);


module.exports=app;
