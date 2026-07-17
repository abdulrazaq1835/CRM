import express from "express";

import {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  deleteInquiry,
} from "../controllers/inquiry.controllers.js";

const router = express.Router();

router.post("/", createInquiry);

router.get("/", getAllInquiries);

router.get("/:id", getInquiryById);

router.delete("/:id", deleteInquiry);

export default router;