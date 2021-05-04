import express, { Request, Response } from "express";
import { restaurantController } from "../../controllers";

export const router = express.Router({
  strict: true,
});

router.post("/", (req: Request, res: Response) => {
  restaurantController.create(req, res);
});

router.get("/", (req: Request, res: Response) => {
  restaurantController.read(req, res);
});
