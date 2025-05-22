import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  img: { type: String, required: true, default: " " },
  mainHeading: { type: String, required: true, default: " " },
  desc: { type: String, required: true, default: " " },
  subHeading1: { type: String, required: true, default: " " },
  desc1: { type: String, required: true, default: " " },
  subHeading2: { type: String, required: true, default: " " },
  desc2: { type: String, required: true, default: " " },
  subHeading3: { type: String, required: true, default: " " },
  desc3: { type: String, required: true, default: " " },
});

const Service = mongoose.model("Service", ServiceSchema);

export default Service;