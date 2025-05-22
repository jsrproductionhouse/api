import Banner from "../MongoDb/Models/Banner.js";

const updateBanner = async (req, res) => {
    try {
        const { type } = req.params;
        const { img } = req.body;

        await Banner.updateOne({category:type},{    
            $set: {
                img: img
            }
        });
        return res.status(200).json({ message: "Banner updated successfully!!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const addBanner = async (req, res) => {
    try {
        const {type} = req.params;
        console.log(type);
        await Banner.updateOne({category:type},{    
            $set:req.body
        });
        console.log("hello")
        return res.status(200).json({ message: "Banner Added Successfully!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteBanner = async (req, res) => {
    try {
        const {type} = req.params;
        const {img} = req.body;
        console.log(type);
        console.log(req.body);
        const response=await Banner.updateOne({category:type},{    
            $set:{
                img: img
            }
        },
        {
            new:true
        });
        console.log(response)
        return res.status(200).json({ message: "Banner Deleted Successfully!",image:response });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getAllBanners = async (req, res) => {
    try {
        // console.log("hl")
        const {type}=req.params;
        const banners = await Banner.findOne({category:type});
        return res.status(200).json(banners);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { addBanner, deleteBanner, getAllBanners, updateBanner }