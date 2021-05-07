import morgan, { StreamOptions } from "morgan";
import Logger from "../../lib/logger";

// Override stream method by telling
// Morgan to use custome logger
const stream: StreamOptions = {
  // Use the http severity
  write: (message) => Logger.http(message),
};

// Skip all Morgan http log if
// application is not running in development mode.
const skip = (): boolean => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

// Build morgan middleware
const morganMiddleware = morgan(
  // Define message format string
  ":method :url :status :res[content-length] - :response-time ms",
  // Options: stream and skip overwrote
  { stream, skip }
);

export default morganMiddleware;
