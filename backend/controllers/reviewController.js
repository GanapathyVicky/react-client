import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async(req,res)=>{
    const tourId = req.params.tourId
    const newReview = new Review({...req.body})
    try{
        const savedReview = await newReview.save()

        //after creating a new review new update the reviews array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        })
        res.status(200).json({success:true,message:'Review Submitted',
        data:savedReview})
    }catch(err){
        res.status(5000).json({success:false,message:'Failed To Submit The Review',
        data:savedReview})
    }
};