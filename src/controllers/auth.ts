import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import Users from "../models/user";
import ConflictError from "../errors/conflict";
import bcrypt from "bcrypt";

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
      throw new ConflictError("username already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const addedUser = await Users.add(username, hashedPassword);
    console.log(addedUser);

    return c.json({
      status: "success",
      message: `user ${username} created successfully`,
    });
  }
);

export default authApp;
