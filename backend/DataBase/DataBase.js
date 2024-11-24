import mongoose from "mongoose";
const DB_URI = process.env.DB_URI;
const ConnectedToDB =async () => {
    await mongoose.connect(DB_URI || process.env.LocalURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
} 
export default ConnectedToDB;