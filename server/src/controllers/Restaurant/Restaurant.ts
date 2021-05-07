import { Request, Response } from "express";
import pool from "../../db";
import { PoolClient, QueryResult, QueryResultRow } from "pg";
import {
  CREATE_RESTAURANT,
  GET_ALL_RESTAURANTS,
  GET_RESTAURANT,
  UPDATE_RESTAURANT,
  DELETE_RESTAURANT,
} from "../../config/constants";
import Logger from "../../lib/logger";

export class RestaurantController {
  public async create(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const client: PoolClient = await pool.connect();
      const sql = CREATE_RESTAURANT;

      //   if (req.body.name.trim() == "") {
      //     res.status(400).send({
      //       message: "Name cannot be blank",
      //     });
      //   }
      //   if (req.body.location.trim() == "") {
      //     res.status(400).send({
      //       message: "location cannot be blank",
      //     });
      //   }
      //   if (typeof req.body.price_range != "number") {
      //     res.status(400).send({
      //       message: "price_range must be a number",
      //     });
      //   }

      const { rows }: QueryResult = await client.query(sql, [
        req.body.name,
        req.body.location,
        req.body.price_range,
      ]);
      const results: QueryResult = rows[0];
      Logger.error(results);

      client.release();

      res.status(201).json({
        status: "success",
        data: {
          restaurants: results,
        },
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async readAll(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const client: PoolClient = await pool.connect();
      const sql = GET_ALL_RESTAURANTS;
      const { rows }: QueryResultRow = await client.query(sql);
      const results: QueryResultRow = rows;

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

  public async read(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const client: PoolClient = await pool.connect();
      const sql = GET_RESTAURANT;
      const { rows }: QueryResult = await client.query(sql, [req.params.id]);
      const results: QueryResult = rows[0];

      client.release();

      //   if (results == undefined) {
      //     res.status(404).send({
      //       message: "That id does not exist",
      //     });
      //   }

      res.status(200).json({
        status: "success",
        data: {
          restaurant: results,
        },
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  public async update(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const client: PoolClient = await pool.connect();
      const sql = UPDATE_RESTAURANT;

      //   if (req.body.name.trim() == "") {
      //     res.status(400).send({
      //       message: "Name cannot be blank",
      //     });
      //   }
      //   if (req.body.location.trim() == "") {
      //     res.status(400).send({
      //       message: "location cannot be blank",
      //     });
      //   }
      //   if (typeof req.body.price_range != "number") {
      //     res.status(400).send({
      //       message: "price_range must be a number",
      //     });
      //   }

      const { rows }: QueryResult = await client.query(sql, [
        req.body.name,
        req.body.location,
        req.body.price_range,
        req.params.id,
      ]);
      const results: QueryResult = rows[0];

      client.release();

      //   if (results == undefined) {
      //     res.status(404).send({
      //       message: "That id does not exist",
      //     });
      //   }

      res.status(200).json({
        status: "success",
        data: {
          restaurants: results,
        },
      });
    } catch (error) {
      //   res.status(400).send(error);
      console.log(error);
    }
  }

  public async delete(
    req: Request<import("express-serve-static-core").ParamsDictionary>,
    res: Response
  ): Promise<void> {
    try {
      const client: PoolClient = await pool.connect();
      const sql = DELETE_RESTAURANT;
      const { rows } = await client.query(sql, [req.params.id]);
      const results = rows[0];

      Logger.info(results);

      client.release();

      //   if (results == undefined) {
      //     res.status(404).send({
      //       message: "That id does not exist",
      //     });
      //   }

      res.status(200).json({
        status: "success",
      });
    } catch (error) {
      console.log(error);
    }
  }
}
