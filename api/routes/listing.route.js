import express from "express";
import { test } from "../controllers/listing.controller.js";
import { createListing } from "../controllers/listing.controller.js";
import { getListings } from "../controllers/listing.controller.js";
import { getListing } from "../controllers/listing.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/create", createListing);
router.get("/get", getListings);
router.get("/get/:id", getListing);

export default router;
