import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  img:{ 
    type: String, 
    required: true
  },
  category: { type: String, required: true, default: " " },
});

const Banner = mongoose.model("Banner", BannerSchema);

export default Banner;