import Tour from "../models/Tour.js";

export const createTour = async (req,res) => {

    // Create a new Tour object from the request body
    const newTour = new Tour(req.body);

    try {
        // Save the new tour to the database
        const savedTour = await newTour.save();

        // Send a success response to the client
        res.status(200).json({
            success: true,
            message: "Successfully created tour",
            data: savedTour,
        });
    } catch(err) {
        // Send an error response to the client
        res.status(500).json({
            success: false,
            message: "Failed to create tour",
            error: err.message,
        });
    }
};


//update tour
export const updateTour =async(req,res)=>{
const id = req.params.id

    try{
        const updatedTour =await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
        success: true,
        message: "successfully updated",
        data: updatedTour,
    });

    }catch(err){
        res.status(500).json({
            success:false,messege:"Failed da mairu"
        });
    }
}

//delete
export const deleteTour =async(req,res)=>{
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id);
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


export const getSingleTour =async(req,res)=>{
    const id = req.params.id;
    try{
        const tour =await Tour.findById(id).populate("reviews");

        res.status(200).json({
        success: true,
        message: "Successfully get the single data",
        data: tour,
        
    });}catch(err){
        res.status(404).json({
            success:false,
            messege:"not found",
            error: err.message,
        });
    }
}
export const getAllTour =async(req,res)=>{
    const page = parseInt(req.query.page);
    console.log(page);
    try{
        const tours =await Tour.find({})
        .populate('reviews')
        .skip(page * 8)
        .limit(8);

        res.status(200).json({
        success: true,
        count:tours.length,
        message: "Successfull",
        data: tours,
    });}catch(err){
        res.status(404).json({
            success:false,
            messege:"not found",
        });
    }
}
    //seach bar
    export const getTourBySearch = async(req,res)=>{

        const city =new RegExp(req.query.city,"i");
        const distance = parseInt(req.query.distance);
        const maxGroupSize = parseInt(req.query.maxGroupSize);

        try{
            const tours = await Tour.find({
               city,
               distance:{$gte:distance},
               maxGroupSize:{$gte:maxGroupSize}
           });
           res.status(200).json({
               success: true,
               message: "Successfully",
               data: tours,
           });
        }catch(err){
            res.status(404).json({
               success:false,
               messege:"not found",
            });
       
        }
    }
    
//Fearched tour

export const getFeaturedTour  =async(req,res)=>{

    try{
        const tours =await Tour.find({})
        .limit(10);

        res.status(200).json({
        success: true,
        count:tours.length,
        message: "Successfully",
        data: tours,
    });}catch(err){
        res.status(404).json({
            success:false,
            messege:"not found",
        });
    }
}
//get tour counts
export const getTourCount  =async(req,res)=>{

    try{
        const tourCount =await Tour.estimatedDocumentCount({});
 

        res.status(200).json({
        success: true,
        data: tourCount,
    });}catch(err){
        res.status(404).json({
            success:false,
            messege:"failed to fetch",
        });
    }
}