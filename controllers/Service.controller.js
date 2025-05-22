import Service from "../MongoDb/Models/Service.js";

const addService = async (req, res) => {
  try {
    const {
      img,
      mainHeading,
      desc,
      subHeading1,
      desc1,
      subHeading2,
      desc2,
      subHeading3,
      desc3,
    } = req.body;

    await Service.create({
        img,
        mainHeading,
        desc,
        subHeading1,
        desc1,
        subHeading2,
        desc2,
        subHeading3,
        desc3,
      });

    return res.status(200).json({ message: "Service added Successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await Service.findById({ _id: id });
    if(service){
      await Service.findByIdAndDelete({ _id: id });
      return res.status(200).json({ message: "Service deleted successfully!" });
    }else{
      return res.status(404).json({ message: "ServiceID not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
const getService = async (req, res) => {
  console.log("hello")
  const {_id}=req.params;
  try {
    const services = await Service.findById(_id);

    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      img,
      mainHeading,
      desc,
      subHeading1,
      desc1,
      subHeading2,
      desc2,
      subHeading3,
      desc3,
    } = req.body;

    const service = await Service.findById({ _id: id });
    if(service){
      await Service.findByIdAndUpdate({ _id: id }, {
        img,
        mainHeading,
        desc,
        subHeading1,
        desc1,
        subHeading2,
        desc2,
        subHeading3,
        desc3,
      });
      return res.status(200).json({ message: "Service updated successfully!" });
    }else{
      return res.status(404).json({ message: "ServiceID not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export { addService, deleteService, getAllServices, updateService,getService }