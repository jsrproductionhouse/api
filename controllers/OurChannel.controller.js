import OurChannel from "../MongoDb/Models/OurChannels.js";
import { ObjectId } from 'mongodb';

const id = new ObjectId("64f814cea538ffeab8f6c790");

const createOCPara = async (req, res) => {
    try {
        const { para } = req.body;

        await OurChannel.create({ para });

        return res.status(200).json({ message: "Paragraph added Successfully!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateOCPara = async (req, res) => {
    try {
        const { para } = req.body;
        await OurChannel.findByIdAndUpdate({ _id: id }, { para });

        return res.status(200).json({ message: "Paragraph updated Successfully!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getOCPara = async (req, res) => {
    try {
        const para = await OurChannel.findById({ _id: id });

        return res.status(200).json(para);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { createOCPara, updateOCPara, getOCPara }