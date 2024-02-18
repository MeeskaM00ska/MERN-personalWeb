import express from "express";
import listingRouter from "./routes/listing.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/api/listing", listingRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080...");
});