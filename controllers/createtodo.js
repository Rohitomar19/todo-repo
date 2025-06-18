// create the model
const todo = require("../models/todo");

// define the route handler
exports.createtodo = async(req,res) => {
    try{
        // extract title and description from request body
        const {title, description} = req.body;
        // create a new todo object and insert in DB
        const response = await todo.create({title, description});
        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data: response,
                message:'entry created successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:' internal server error',
                message: err.message,
            }
        );
    }
}
