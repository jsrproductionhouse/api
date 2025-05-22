import {
    getAllLines,
    updateLine,

  } from "../controllers/Aboutparagraph.controller.js";
  import express from "express";
  
  const router = express.Router();
  
  router.route("/").get(getAllLines);
  router.route("/line").put(updateLine);
  
  export default router;
  