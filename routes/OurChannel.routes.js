import express from "express";

import { createOCPara, updateOCPara, getOCPara } from "../controllers/OurChannel.controller.js";

const router = express.Router();

router.route("/").post(createOCPara);
router.route("/").put(updateOCPara);
router.route("/").get(getOCPara);

export default router;