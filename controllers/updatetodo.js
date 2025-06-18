// create the model
const todo = require("../models/todo");

// define the route handler
exports.updatetodo = async(req,res) => {
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const todo = await todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedat:Date.now()},
        )
        
        res.status(200).json({
            success:true,
            data:todo,
            message:'update successfully',
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:'server error',
        });
    }
}
