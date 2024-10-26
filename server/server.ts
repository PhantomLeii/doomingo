import { Hono } from "hono";
import { logger } from "hono/logger";

const api = new Hono().basePath("/api");

api.use(logger());

api.onError((err, c) => {
  // send error to API monitoring service
  console.error(`${err}`);
  return c.json("Something went wrong", 500);
});

api.get("/", (c) => {
  return c.json({ message: "Hello from Hono server" });
});

export default api;
