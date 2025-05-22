import Video from "../MongoDb/Models/Video.js";

const addVideo = async (req, res) => {
    try {
        const { link } = req.body;
        await Video.create({
            link
        });
        return res.status(200).json({ message: "Video added Successfully!" });
    } catch (error) {
       return res.status(500).json({ message: error.message }); 
    }
}

const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;

        const vid = await Video.findById({ _id: id });
        if(vid){
            await Video.findByIdAndDelete({ _id: id });
            return res.status(200).json({ message: "Video Deleted Successfully!" });
        } else {
            return  res.status(401).json("No video found with this ID");
        }
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
}

const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find();

        return res.status(200).json(videos);
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
}

export { addVideo, deleteVideo, getAllVideos }