import EmployModel from "../../models/EmployeeModel.js";

const DeleteEmployee = async(req,res)=>{
     try { 
        const id = req.params.id
        const EmpExists = await EmployModel.findById({_id : id})
        if(!EmpExists){
          res.status(400).json({
            message: 'Employee not found',
            success:false,  
            error:true
        })
        }
        const deleteEmp = await EmployModel.findByIdAndDelete(id)
        res.status(200).json({
             success: true, 
             message: 'Employee deleted successfully', 
            });
     }
         catch (error) { 
          res.status(500).json({
           success: false, 
           message: 'Error deleting employee', 
           error: error.message, 
          });
        } 
}

export default DeleteEmployee