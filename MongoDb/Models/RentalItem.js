import mongoose from "mongoose";

const RentalItemSchema = new mongoose.Schema({
  heading:{ 
    type: String, 
    required: true
  },
  content: { type: String, required: true, default: " " },
});

const RentalItem = mongoose.model("RentalItem", RentalItemSchema);

export default RentalItem;