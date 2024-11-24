import EmployModel from "../../models/EmployeeModel.js";

const SearchEmployee = async(req,res)=>{
    try {
        // const id  = req.params.key
        // console.log('id',id,'date',date)
        const query = {
            "$or" : [
                {name : {$regex:req.params.key, $options:'i'}},
                {email : {$regex:req.params.key, $options:'i'}},
                
            ]
        }
        // if(id) query._id = id;
        // if(date) query.createdAt = {
        //     $gte: new Date(date),
        //     $lt:new Date(new Date(date).setDate(new Date(date).getDate() + 1))
        // };
        const employee = await EmployModel.find(query)
        if(!employee.length){
            res.status(404).json({
                success: false, 
                message: 'No employees found matching the criteria', 
                error: error.message, 
               });
        }
        res.status(200).json({
            success: true, 
            data : employee, 
           });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'No keyword matched please enter valid keyword', 
            error: error.message, 
           });
    }
}

export default SearchEmployee
