import express from "express";

import { addBod, getAllBod, getBodById, deleteBod, updateBod } from "../controllers/Bod.controller.js";

const router = express.Router();

router.route("/").get(getAllBod);
router.route("/").post(addBod);
router.route("/:id").get(getBodById);
router.route("/:id").put(updateBod);
router.route("/:id").get(deleteBod);

export default router;