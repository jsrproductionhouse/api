import Views from "../MongoDb/Models/View.js";

const ViewsUpdate = async (req, res) => {
    try {
    const updatedView =await Views.findOneAndUpdate({},{
       $inc: { count: 1 } },
       { upsert: true, new: true },  
    )
    res.json({ count: updatedView.count });
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };

  const GetAllViews=async(req,res)=>{
    try{
     const response=await Views.find();
     if(response)
     {
      res.status(200).json({message:response[0]});
     }
     else{
      res.status(404).json({message:"Page not found"});
     }
    }
    catch(e){
      res.status(500).json({m:e.message});
    }
  }

  export{ ViewsUpdate,GetAllViews};
  