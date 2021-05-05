import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import pool from "../../db";

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

  public async readAll(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const client = await pool.connect();
      const sql = "SELECT * FROM restaurants";
      const { rows } = await client.query(sql);
      const results = rows;

      client.release();

      res.status(200).json({
        status: "success",
        results: results.length,
        data: {
          restaurants: results,
        },
      });
    } catch (error) {
      res.status(400).send(error);
    }
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
