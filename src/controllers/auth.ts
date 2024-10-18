import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import Users from "../models/user";

const userSchema = z.object({
  username: z.string().min(1, "username is required"),
  password: z.string().min(6, "password must contains at least 6 characters"),
});

type User = z.infer<typeof userSchema>;

const authApp = new Hono().post(
  "/signup",
  zValidator("json", userSchema),
  async (c) => {
    const { username, password }: User = await c.req.json();
    // console.log(candidateUser);

    if (await Users.exists(username)) {
      // username already exists
      // return c.json({ status: "error", message: "username already exists" });
    }

    return c.json({ status: "success" });
  }
);

export default authApp;
