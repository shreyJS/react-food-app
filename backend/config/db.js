import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.