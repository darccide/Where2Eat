import { Request, Response } from "express";
import { CrudController } from "../CrudController";

export class RestaurantController extends CrudController {
  public create(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: "McDonalds",
      },
    });
  }

  public readAll(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    res.status(200).json({
      status: "success",
      data: {
        restaurant: ["McDonalds", "Wendys"],
      },
    });
  }

  public read(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    console.log(req.params);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: "McDonalds",
      },
    });
  }

  public update(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    console.log(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: "McDonalds",
      },
    });
  }

  public delete(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): void {
    res.status(204).json({
      status: "success",
    });
  }
}
