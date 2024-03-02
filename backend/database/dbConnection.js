import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"BLOGAPP"
    }).then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log(`${err}`);
    });
}