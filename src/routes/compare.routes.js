import express from "express";
import { compareHandler } from "../controllers/compare.controller.js";

const router = express.Router();
router.post("/compare", compareHandler);

export default router;
