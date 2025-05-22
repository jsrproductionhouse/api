import express from "express";

import { addRentalItem, deleteRentalItem, getAllRentalItems, getRentalItemByID, updateRentalItem } from "../controllers/RentalItem.controller.js";

const router = express.Router();

router.route("/").get(getAllRentalItems);
router.route("/").post(addRentalItem);
router.route("/:id").delete(deleteRentalItem);
router.route("/:id").get(getRentalItemByID);
router.route("/:id").put(updateRentalItem);

export default router; 