import jwt from "jsonwebtoken";
import redis from "../configs/redis";

export const generateTokens = async (
  userId: number
): Promise<{ accessToken: string; refreshToken: string }> => {
  const accessToken = jwt.sign(
    { userId },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXP as string,
    }
  );

  const uuid = crypto.randomUUID();
  const refreshToken = jwt.sign(
    { userId, uuid },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXP as string,
    }
  );
  await redis.set(uuid, refreshToken);

  return { accessToken, refreshToken };
};
