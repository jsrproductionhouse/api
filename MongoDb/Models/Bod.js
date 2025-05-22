import mongoose from "mongoose";

const BodSchema = new mongoose.Schema({
  name:{ 
    type: String,
  },
  desig: { type: String, default: " " },
  content: { type: String, default: " " },
  img: { type: String, default: " " },
});

const Bod = mongoose.model("Bod", BodSchema);

export default Bod;