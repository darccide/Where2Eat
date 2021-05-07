// PORT
export const PORT = process.env.PORT || 4040;

// API
export const API_BASE_URL = "http://localhost:4000";
export const API_PATH = "/api/v1";

// SQL
export const CREATE_RESTAURANT =
  "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *";
export const GET_ALL_RESTAURANTS = "SELECT * FROM restaurants";
export const GET_RESTAURANT = "SELECT * FROM restaurants where id = $1";
export const UPDATE_RESTAURANT =
  "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *";
export const DELETE_RESTAURANT =
  "DELETE FROM restaurants where id = $1 returning *";
