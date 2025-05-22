import {ViewsUpdate,GetAllViews} from "../controllers/ViewsController.js";
import express from "express";

const router = express.Router();

router.route('/').post(ViewsUpdate);
router.route('/').get(GetAllViews);
export default router;