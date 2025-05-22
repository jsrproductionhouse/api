import express from "express";

import { addService, deleteService, getAllServices, updateService,getService } from "../controllers/Service.controller.js";

const router = express.Router();

router.route("/").post(addService);
router.route("/:id").delete(deleteService);
router.route("/").get(getAllServices);
router.route("/:_id").get(getService);
router.route("/:id").put(updateService);

export default router;