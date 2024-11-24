
import EmployModel from '../../models/EmployeeModel.js'
const EmployeeSignup = async (req,res) => {
    try {
        const {name,email,mobile,desingnation,gender,course,profilePic} = req.body
        const user = await EmployModel.findOne({email:email})
        if(user){
            return res.status(400).json({
                message:"Employee already exist!"
            })
        }
        if(!email || !name || !mobile || !desingnation || !gender || !course || !profilePic){
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields"
            })
        }
          const payload = {
            ...req.body,
          }
        const userData = new EmployModel(payload)
        const saveUser= await userData.save()
        res.status(200).json({
            success:true,
            data:saveUser,
            message:"Employee created successfully"
        })
    } catch (error) {
        res.status(400).json({
            message:error,
            error:true,
            success:false
        })
    }
}

export default EmployeeSignup