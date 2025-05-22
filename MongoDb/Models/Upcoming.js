import mongoose from 'mongoose';

const UpcomingSchema = new mongoose.Schema({
    title: { type: String, default: " " },
    img: { type: String, default: " " },
    director: { type: String, default: " " },
    dop: { type: String, default: " " },
    producer: { type: String, default: " " },
    singer: { type: String, default: "" },
    musicproducer: { type: String, default: "" },
    link: { type: String, default: " " }
});

const UpcomingModel = mongoose.model('Upcoming', UpcomingSchema);

export default UpcomingModel;
