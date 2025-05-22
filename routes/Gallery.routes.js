import {
  getAllImages,
  updateImage1,
  updateImage2,
  updateImage3,
  updateImage4,
  updateImage5,
  updateImage6,
  updateImage7,
  updateImage8,
  updateImage9,
  updateImage10,
  updateImage11,
  updateImage12,
  updateImage13,
  updateImage14,
  updateImage15,
  updateImage16,
  updateImage17,
  updateImage18,
  updateImage19,
  updateImage20,
  updateImage21,
  updateImage22,
  updateImage23,
  updateImage24,
  updateImage25,
  updateImage26,
  updateImage27,
  updateImage28,
  updateImage29,
  updateImage30,
} from "../controllers/Gallery.controller.js";
import express from "express";

const router = express.Router();

router.route("/").get(getAllImages);
router.route("/img1").put(updateImage1);
router.route("/img2").put(updateImage2);
router.route("/img3").put(updateImage3);
router.route("/img4").put(updateImage4);
router.route("/img5").put(updateImage5);
router.route("/img6").put(updateImage6);
router.route("/img7").put(updateImage7);
router.route("/img8").put(updateImage8);
router.route("/img9").put(updateImage9);
router.route("/img10").put(updateImage10);
router.route("/img11").put(updateImage11);
router.route("/img12").put(updateImage12);
router.route("/img13").put(updateImage13);
router.route("/img14").put(updateImage14);
router.route("/img15").put(updateImage15);
router.route("/img16").put(updateImage16);
router.route("/img17").put(updateImage17);
router.route("/img18").put(updateImage18);
router.route("/img19").put(updateImage19);
router.route("/img20").put(updateImage20);
router.route("/img21").put(updateImage21);
router.route("/img22").put(updateImage22);
router.route("/img23").put(updateImage23);
router.route("/img24").put(updateImage24);
router.route("/img25").put(updateImage25);
router.route("/img26").put(updateImage26);
router.route("/img27").put(updateImage27);
router.route("/img28").put(updateImage28);
router.route("/img29").put(updateImage29);
router.route("/img30").put(updateImage30);

export default router;
