import RentalItem from "../MongoDb/Models/RentalItem.js";

const getAllRentalItems = async (req, res) => {
    try {
        const RI = await RentalItem.find();

        return res.status(200).json(RI);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const addRentalItem = async (req, res) => {
    try {
        const { heading, content } = req.body;

        await RentalItem.create({ heading, content });

        return res.status(200).json({ message: "Item added Successfully!"});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteRentalItem = async (req, res) => {
    try {
        const { id } = req.params;
        const RI = await RentalItem.findById({ _id :  id } );
        if(RI){
            await RentalItem.findByIdAndDelete({_id: id});
            return res.status(200).json({message: "Item deleted Successfully"});
        }else{
            return res.status(401).json({message:"No Item Found with this Id"});
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getRentalItemByID = async (req, res) => {
    try {
        const { id } = req.params;

        const ri = await RentalItem.findById({ _id: id });
        if(ri){
            return res.status(200).json(ri);
        }else{
            return res.status(404).json({ message: "invalid ID!!"});
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateRentalItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { heading, content } = req.body;

        const ri = await RentalItem.findById({ _id: id });
        if(ri){
            await RentalItem.findByIdAndUpdate({ _id: id }, { heading, content });
            return res.status(200).json({ message: "Rental Updated"});
        }else{
            return res.status(404).json({ message: "invalid ID!!"});
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { getAllRentalItems, addRentalItem, deleteRentalItem, getRentalItemByID, updateRentalItem }