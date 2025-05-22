import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  link: { type: String, required: true, default: " " },
});

const VideoModel = mongoose.model("Video", VideoSchema);

export default VideoModel;