import mongoose from 'mongoose';

const releasedProjectSchema = new mongoose.Schema({
    title: { type: String, default: " " },
    img: { type: String, default: " " },
    producer: { type: String, default: " " },
    director: { type: String, default: " " },
    dop: { type: String, default: " " },
    singer: { type: String, default: "" },
    musicproducer: { type: String, default: "" },

    
    link: { type: String, default: " " }
});

const releasedProjectModel = mongoose.model('ReleasedProject', releasedProjectSchema);

export default releasedProjectModel;
