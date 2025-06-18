const todo = require("../models/todo");

exports.gettodo = async(req,res) => {
    try{
        // fetch all todo item from the database
        const todos = await todo.find({});

        // update response
        res.status(200).json({
            success:true,
            data:todos,
            message:"enter todo data is fetched",
        });
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



exports.gettodobyid = async(req,res) => {
    try{
        // extract todo item on basis of id
        const id= req.params.id;
        const todoitem = await todo.findById({_id:id})

        // data for given id not found
        if(!todoitem){
            return res.status(404).json({
                success:false,
                message:"No data found with given id",
            })
        }

        // data for given id found
        res.status(200).json({
            success:true,
            data:todoitem,
            message: 'todo ${id} data successfully fetched',
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