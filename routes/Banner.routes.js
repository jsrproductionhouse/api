import express from "express";

import { addBanner, deleteBanner, getAllBanners, updateBanner } from "../controllers/Banner.controller.js";

const router = express.Router();

router.route("/:type").post(addBanner);
router.route("/:type").get(getAllBanners);
router.route("/:type").delete(deleteBanner)
router.route("/:type").put(updateBanner);

export default router; 