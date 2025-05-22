import {createUpcoming,deleteUpcoming,getAllUpcoming,getByID,update} from "../controllers/UpcomingController.js";
import express from "express";

const router = express.Router();

router.route('/').post(createUpcoming);
router.route('/').get(getAllUpcoming);
router.route('/:id').delete(deleteUpcoming);
router.route("/id/:id").get(getByID);
router.route("/update/:id").put(update);



export default router;