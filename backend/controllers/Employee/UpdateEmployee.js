
import EmployModel from "../../models/EmployeeModel.js"

 const UpdateEmployee = async (req,res)=>{
      try {
        const id = req.params.id
        const userExists = await EmployModel.findById({_id : id})
        if(!userExists){
          res.status(400).json({
            message: 'User not found',
            success:false, 
            error:true
        })
        }
        const updatedUser = await EmployModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json({
          message: 'User Updated',
          success:true,
          data:updatedUser
      })
        // const {userId,email,name, mobile , desingnation , gender ,course ,profilePic} = req.body


        //  const payload = {
        //     ...(email && {email:email}),
        //     ...(name && {name:name}),
        //     ...(mobile && {mobile:mobile}),
        //     ...(desingnation && {desingnation:desingnation}),
        //     ...(gender && {gender:gender}),
        //     ...(course && {course:course}),
        //     ...(profilePic && {profilePic:profilePic}),
           

        //  }

        //  const user = await EmployModel.findById(sessionUser)
        //  console.log("user", user)
 
        //  const updateUser = await EmployModel.findByIdAndUpdate(userId,payload)
        //  res.status(400).json({
        //     message: 'User Updated',
        //     success:true,
        //     data:updateUser
        // })
         
       } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success:false
        })
      }
 }

 export default UpdateEmployee