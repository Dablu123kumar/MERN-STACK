import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: {
        type: String,
        required : [true,"please provide name"],
        minLength : [5, "name should be greater then or equal to 5 charecter"]
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:String,
    role : String,

},{
    timestamps:true
})

const UserModel = mongoose.model('User',UserSchema)
export default UserModel