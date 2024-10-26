import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

// Middleware
app.use(logger());

app.get("/", (c) => {
  return c.json({ message: "Hello from Hono server" });
});

export default app;
