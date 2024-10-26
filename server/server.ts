import { Hono } from "hono";
import { logger } from "hono/logger";

const server = new Hono();

server.use(logger());

server.get("/", (c) => {
  return c.json({ message: "Hello from HONO" });
});

export default server;
