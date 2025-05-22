import mongoose from "mongoose";

const AboutparagraphSchema = new mongoose.Schema({
    line:[{
        type:String,
        required:true,
    }],
});

const Aboutparagraph = mongoose.model("About paragraph", AboutparagraphSchema);

export default Aboutparagraph;
