import express, { Request, Response } from "express";
import { restaurantController } from "../../controllers";

export const router = express.Router({
  strict: true,
});

router.get("/", (req: Request, res: Response): void => {
  restaurantController.readAll(req, res);
});

router.get("/:id", (req: Request, res: Response): void => {
  restaurantController.read(req, res);
});

router.post("/", (req: Request, res: Response): void => {
  restaurantController.create(req, res);
});

router.put("/:id", (req: Request, res: Response): void => {
  restaurantController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response): void => {
  restaurantController.delete(req, res);
});
