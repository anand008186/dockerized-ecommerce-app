import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productRouter);



app.listen(3001, () => console.log("Server started"));

mongoose.connect(
  process.env.MONGO_URI
).then(() => {
  console.log("Connected to database");
}
).catch((error) => {
  console.log(error);
});