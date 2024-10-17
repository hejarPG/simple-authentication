import sql from "../configs/db";

interface User {
  id: number;
  username: string;
  password: string;
}

const Users = {
  exists: async (username: string): Promise<boolean> => {
    return (
      (await sql`select true from users where username=${username}`).count !== 0
    );
  },
};
