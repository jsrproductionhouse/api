import mongoose from 'mongoose';

const ViewSchema = new mongoose.Schema({
   count:{
    type:Number,
    required:true,
   }
});

const ViewsModel = mongoose.model('View', ViewSchema);

export default ViewsModel;