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

  add: async (username: string, password: string): Promise<User> => {
    return (
      await sql<
        User[]
      >`insert into users (username, password) values (${username}, ${password}) returning id, username, password`
    )[0];
  },

  get: async (username: string): Promise<User> => {
    return (
      await sql<User[]>`select * from users where username=${username}`
    )[0];
  },
};

export default Users;
