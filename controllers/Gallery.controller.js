import Gallery from "../MongoDb/Models/Gallery.js";

const getAllImages = async (req, res) => {
  try {
    const ReleasedProjects = await Gallery.findById({
      _id: process.env.GALLERY_ID,
    });
    return res.status(200).json(ReleasedProjects);
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage1 = async (req, res) => {
  try {
    const { img1 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img1: img1,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage2 = async (req, res) => {
  try {
    const { img2 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img2: img2,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage3 = async (req, res) => {
  try {
    const { img3 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img3: img3,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage4 = async (req, res) => {
  try {
    const { img4 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img4: img4,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage5 = async (req, res) => {
  try {
    const { img5 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img5: img5,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage6 = async (req, res) => {
  try {
    const { img6 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img6: img6,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage7 = async (req, res) => {
  try {
    const { img7 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img7: img7,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage8 = async (req, res) => {
  try {
    const { img8 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img8: img8,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage9 = async (req, res) => {
  try {
    const { img9 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img9: img9,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage10 = async (req, res) => {
  try {
    const { img10 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img10: img10,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage11 = async (req, res) => {
  try {
    const { img11 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img11: img11,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage12 = async (req, res) => {
  try {
    const { img12 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img12: img12,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage13 = async (req, res) => {
  try {
    const { img13 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img13: img13,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage14 = async (req, res) => {
  try {
    const { img14 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img14: img14,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage15 = async (req, res) => {
  try {
    const { img15 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img15: img15,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage16 = async (req, res) => {
  try {
    const { img16 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img16: img16,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage17 = async (req, res) => {
  try {
    const { img17 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img17: img17,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage18 = async (req, res) => {
  try {
    const { img18 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img18: img18,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage19 = async (req, res) => {
  try {
    const { img19 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img19: img19,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage20 = async (req, res) => {
  try {
    const { img20 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img20: img20,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage21 = async (req, res) => {
  try {
    const { img21 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img21: img21,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage22 = async (req, res) => {
  try {
    const { img22 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img22: img22,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage23 = async (req, res) => {
  try {
    const { img23 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img23: img23,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage24 = async (req, res) => {
  try {
    const { img24 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img24: img24,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage25 = async (req, res) => {
  try {
    const { img25 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img25: img25,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage26 = async (req, res) => {
  try {
    const { img26 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img26: img26,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage27 = async (req, res) => {
  try {
    const { img27 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img27: img27,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage28 = async (req, res) => {
  try {
    const { img28 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img28: img28,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage29 = async (req, res) => {
  try {
    const { img29 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img29: img29,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateImage30 = async (req, res) => {
  try {
    const { img30 } = req.body;

    await Gallery.findByIdAndUpdate(
      { _id: process.env.GALLERY_ID },
      {
        $set: {
          img30: img30,
        },
      }
    );

    return res.status(200).json({ message: "Image updated Successfully!!" });
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

export {
  getAllImages,
  updateImage1,
  updateImage2,
  updateImage3,
  updateImage4,
  updateImage5,
  updateImage6,
  updateImage7,
  updateImage8,
  updateImage9,
  updateImage10,
  updateImage11,
  updateImage12,
  updateImage13,
  updateImage14,
  updateImage15,
  updateImage16,
  updateImage17,
  updateImage18,
  updateImage19,
  updateImage20,
  updateImage21,
  updateImage22,
  updateImage23,
  updateImage24,
  updateImage25,
  updateImage26,
  updateImage27,
  updateImage28,
  updateImage29,
  updateImage30,
};
