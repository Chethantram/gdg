import mongoose from "mongoose";    

export const connectDb = async()=>{
    await mongoose.connect("mongodb+srv://chethant426:chethan426@cluster.oz01i.mongodb.net/gdg-education");
    console.log("DB connected");
    
}