import express, { Request, Response } from "express";
import { restaurantRouter } from "..";
import { restaurantController } from "../../controllers";

export const router = express.Router({
  strict: true,
});

router.get("/", (req: Request, res: Response) => {
  restaurantController.readAll(req, res);
});

router.get("/:id", (req: Request, res: Response) => {
  restaurantController.read(req, res);
});

router.post("/", (req: Request, res: Response) => {
  restaurantController.create(req, res);
});

router.put("/:id", (req: Request, res: Response) => {
  restaurantController.update(req, res);
});

router.delete("/:id", (req: Request, res: Response) => {
  restaurantController.delete(req, res);
});
