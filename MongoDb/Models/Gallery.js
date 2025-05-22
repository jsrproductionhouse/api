import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  img1: { type: String, required: true, default: " " },
  img2: { type: String, required: true, default: " " },
  img3: { type: String, required: true, default: " " },
  img4: { type: String, required: true, default: " " },
  img5: { type: String, required: true, default: " " },
  img6: { type: String, required: true, default: " " },
  img7: { type: String, required: true, default: " " },
  img8: { type: String, required: true, default: " " },
  img9: { type: String, required: true, default: " " },
  img10: { type: String, required: true, default: " " },
  img11: { type: String, required: true, default: " " },
  img12: { type: String, required: true, default: " " },
  img13: { type: String, required: true, default: " " },
  img14: { type: String, required: true, default: " " },
  img15: { type: String, required: true, default: " " },
  img16: { type: String, required: true, default: " " },
  img17: { type: String, required: true, default: " " },
  img18: { type: String, required: true, default: " " },
  img19: { type: String, required: true, default: " " },
  img20: { type: String, required: true, default: " " },
  img21: { type: String, required: true, default: " " },
  img22: { type: String, required: true, default: " " },
  img23: { type: String, required: true, default: " " },
  img24: { type: String, required: true, default: " " },
  img25: { type: String, required: true, default: " " },
  img26: { type: String, required: true, default: " " },
  img27: { type: String, required: true, default: " " },
  img28: { type: String, required: true, default: " " },
  img29: { type: String, required: true, default: " " },
  img30: { type: String, required: true, default: " " },
});

const GalleryModel = mongoose.model("Gallery", GallerySchema);

export default GalleryModel;
