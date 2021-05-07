require("dotenv").config();
import express from "express";
import cors from "cors";
import { PORT, API_BASE_URL, API_PATH } from "./config/constants";
import { restaurantRouter } from "./routes";
import Logger from "./lib/logger";
import morganMiddleware from "./config/middleware/morganMiddleware";

// options for cors
const corsOptions: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  origin: API_BASE_URL + API_PATH,
  preflightContinue: false,
};

const app = express();
app.use(cors(corsOptions));
app.use(morganMiddleware);
app.use(express.json());

// Routes
app.use(API_PATH + "/restaurants", restaurantRouter);

app.listen(PORT, () => {
  Logger.info(`Server is listening on port ${PORT}`);
  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");
});
