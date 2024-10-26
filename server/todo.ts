import { Hono } from "hono";
import { mergePath } from "hono/utils/url";

export type ToDo = {
  id: number;
  title: string;
  description: string;
};

const mockDatabase: ToDo[] = [];

const todo = new Hono()
  .get("/", async (c) => {
    const todo = await c.json({ data: mockDatabase });
    return todo;
  })
  .post("/create", async (c) => {
    const { body } = c.req.json();
  });
