import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./MongoDb/Connect.js";

import RProjectRouter from "./routes/releasedProject.routes.js";
import Queryrouter from './routes/Query.routes.js'
import Upcomingrouter from './routes/Upcoming.routes.js';
import GalleryRouter from './routes/Gallery.routes.js';
import ViewRouter from './routes/View.routes.js';
import VideoRouter from "./routes/Video.routes.js";
import AParagraphRouter from "./routes/Aboutparagraph.routes.js";
import OurChannelRouter from "./routes/OurChannel.routes.js";
import BannerRouter from "./routes/Banner.routes.js";
import ServiceRouter from "./routes/Service.routes.js";
import RentalItemRouter from "./routes/RentalItem.routes.js";
import BodRouter from "./routes/Bod.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ ma: "hey" });
});

app.use('/RProject',RProjectRouter);

app.use('/Query',Queryrouter);

app.use('/Upcoming',Upcomingrouter);

app.use('/Gallery',GalleryRouter);

app.use('/AParagraph',AParagraphRouter);

app.use('/Views',ViewRouter);

app.use('/Video',VideoRouter);

app.use('/OurChannel',OurChannelRouter);

app.use('/Banner',BannerRouter);

app.use("/Service", ServiceRouter);

app.use("/Rentals", RentalItemRouter);

app.use("/Bod", BodRouter);

const startServer = async () => {
  try {
    connectDB("mongodb://localhost:27017/JSRProduction");
    app.listen(8000, () => {
      console.log("ser");
    });
  } catch (error) {
    console.log(error);
  }
};


startServer();
