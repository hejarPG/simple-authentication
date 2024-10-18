import jwt from "jsonwebtoken";

export const generateTokens = (
  userId: number
): { accessToken: string; refreshToken: string } => {
  const accessToken = jwt.sign(
    { userId },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXP as string,
    }
  );

  const refreshToken = jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXP as string,
    }
  );

  return { accessToken, refreshToken };
};
