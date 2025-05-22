import express from 'express';

import { addVideo, deleteVideo, getAllVideos } from '../controllers/Video.controller.js';

const router = express.Router();

router.route("/").get(getAllVideos);
router.route("/:id").delete(deleteVideo);
router.route("/").post(addVideo);

export default router;