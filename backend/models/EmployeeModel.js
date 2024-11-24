import mongoose from "mongoose";
const EmployeeSchema = mongoose.Schema({
    name:{
       type : String,
       required : [true, " Please provide name"],
       minLength : [5, "name should be greater then or equal to 5 charecter"]
    },
    email: {
        type: String,
        required : [true, " Please provide email"],
        unique : true
    },
    mobile: {
        type : Number,
        required : [true, "provide mobile number"],
        minLength : [10, "mobile number should be of 10 digit"]
    },
    desingnation: {
        type: String,
        required : [true, "provide desingnation"]
    },
    gender: {
        type : String,
        required : [true, "provide gender"]
    },
    course: {
        type: String,
        required : [true, "provide course"]
    },
    profilePic: {
        type: String,
       
    },

},{
    timestamps:true
})

const EmployModel = mongoose.model('Employee',EmployeeSchema)
export default EmployModel
