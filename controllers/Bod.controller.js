import Bod from "../MongoDb/Models/Bod.js";

const getAllBod = async (req, res) => {
    try {
        const bods = await Bod.find();

        return res.status(200).json(bods);
    } catch (error) {
       return res.status(500).json({ message: error.message }); 
    }
}

const getBodById = async (req, res) => {
    try {
        const { id } = req.params;

        const bod = await Bod.findById({ _id: id });

        if(bod){
            return res.status(200).json(bod);
        }else{
            return res.status(404).json({ message: "invalid ID" });
        }
    } catch (error) {
       return res.status(500).json({ message: error.message }); 
    }
}

const deleteBod = async (req, res) => {
    try {
        const { id } = req.params;

        const bod = await Bod.findById({ _id: id });

        if(bod){
            await Bod.findByIdAndDelete({ _id: id });
            return res.status(200).json({ message: "Deleted Successfully" });
        }else{
            return res.status(404).json({ message: "invalid ID" });
        }
    } catch (error) {
       return res.status(500).json({ message: error.message }); 
    }
}

const updateBod = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, desig, content, img } = req.body;

        const bod = await Bod.findById({ _id: id });

        if(bod){
            await Bod.findByIdAndUpdate({ _id: id }, { name, desig, content, img });
            return res.status(200).json({ message: "Updated Successfully" });
        }else{
            return res.status(404).json({ message: "invalid ID" });
        }
    } catch (error) {
       return res.status(500).json({ message: error.message }); 
    }
}

const addBod = async (req, res) => {
    try {
        const { name, desig, content, img } = req.body;

        const bod = await Bod.create({ name, desig, content, img } );

        return res.status(200).json(bod);
    } catch (error) {
       return res.status(500).json({ message: error.message }); 
    }
}

export { addBod, getAllBod, getBodById, deleteBod, updateBod }