import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import sql from "./db";

const app = new Hono();

app.get("/", async (c) => {
  console.log(await sql`SELECT * FROM users`);

  return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
