
import EmployModel from "../../models/EmployeeModel.js"

const AllEmployees = async (req,res) => {
try {
    // console.log('userId', req.userId)
    const allEmployees = await EmployModel.find()
    res.status(200).json({
        message:"all employees",
        data:allEmployees
    })
} catch (error) {
    res.status(400).json({
        message: error.message || error,
        success:false
    })
}
}

export default AllEmployees