require("dotenv").config();
import express from "express";
import morgan from "morgan";
import pool from "./db";
import { PORT, API_BASE_PATH } from "./config/constants";
import { restaurantRouter } from "./routes";

const app = express();
app.use(express.json());

// Routes
app.use(API_BASE_PATH + "/restaurants", restaurantRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
