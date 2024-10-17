import { Hono } from "hono";

const authApp = new Hono().post("/signup", async (c) => {
  return c.json({ status: "success" });
});
