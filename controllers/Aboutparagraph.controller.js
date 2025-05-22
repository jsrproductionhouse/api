import Aboutparagraph from "../MongoDb/Models/Aboutparagraph.js";

const getAllLines = async (req, res) => {
  try {
    const AboutParagraph = await Aboutparagraph.find({
    });
    return res.status(200).json(AboutParagraph);
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateLine = async (req, res) => {
    try {
      console.log("hello")
    await Aboutparagraph.updateOne(
      {},
      {
        $set: {
          line: req.body
        },
      }
    );

    return res.status(200).json({ message: "Line updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};


export {
  getAllLines,
  updateLine,
};
