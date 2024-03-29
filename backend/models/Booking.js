import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
      
    },
    tourName: {
        type: String,
        required: true,
      },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
        type: Number,
        required: true,
      },
    bookAt: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
