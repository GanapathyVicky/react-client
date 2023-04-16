import User from "../models/User.js";

export const createUser = async (req,res) => {

    // Create a new User object from the request body
    const newUser = new User(req.body);

    try {
        // Save the new User to the database
        const savedUser = await newUser.save();

        // Send a success response to the client
        res.status(200).json({
            success: true,
            message: "Successfully created User",
            data: savedUser,
        });
    } catch(err) {
        // Send an error response to the client
        res.status(500).json({
            success: false,
            message: "Failed to create User",
            error: err.message,
        });
    }
};


//Update User
export const updateUser =async(req,res)=>{
const id = req.params.id

    try{
        const updatedUser =await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
        success: true,
        message: "successfully updated",
        data: updatedUser,
    });

    }catch(err){
        res.status(500).json({
            success:false,messege:"Failed da mairu"
        });
    }
}

//Delete User
export const deleteUser =async(req,res)=>{
    const id = req.params.id;
    try{
        await User.findByIdAndDelete(id);
        res.status(200).json({
        success: true,
        message: "successfully Deleted",
        
    });
}catch(err){
        res.status(500).json({
            success:false,
            messege:"Failed to delete",
        });
   }
}

//Get Single User Details
export const getSingleUser =async(req,res)=>{
    const id = req.params.id;
    try{
        const user =await User.findById(id);

        res.status(200).json({
        success: true,
        message: "hi",
        data: user,
    });
    }catch(err){
        res.status(404).json({
            success:false,
            messege:"not found",
        });
    }
}

//Get All User Details
export const getAllUser =async(req,res)=>{
    
    try{
        const users =await User.find({})

        res.status(200).json({
        success: true,
        message: "Successfull",
        data: users,
    });}catch(err){
        res.status(404).json({
            success:false,
            messege:"not found",
        });
    }
}