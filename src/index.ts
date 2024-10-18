import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import authApp from "./controllers/auth";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api/v1");

// app.get("/", async (c) => {
//   console.log(await sql`SELECT * FROM users`);

//   return c.text("Hello Hono!");
// });

const port = 3000;
console.log(`Server is running on port ${port}`);

app.use("*", logger());
app.route("/auth", authApp);

serve({
  fetch: app.fetch,
  port,
});
