require("dotenv").config();
import express from "express";
import { PORT } from "./config/constants";
import { restaurantRouter } from "./routes";

const app = express();
app.use(express.json());

app.use("/restaurants", restaurantRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
