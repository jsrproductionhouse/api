import mongoose from "mongoose";

const OurChannelSchema = new mongoose.Schema({
  para: { type: String, required: true, default: " " },
});

const OurChannel = mongoose.model("OurChannel", OurChannelSchema);

export default OurChannel;
