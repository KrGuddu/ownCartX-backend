// import pkg from "pg";
// const { Client } = pkg;

// const database = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "own_cartx",
//   password: "123456",
//   port: 5432,
//   // connectionString: process.env.DATABASE_URL,
//   // ssl:
//   //   process.env.NODE_ENV === "production"
//   //     ? { rejectUnauthorized: false }
//   //     : false,
// });

// try {
//   await database.connect();
//   console.log("Connected to the database successfully");
// } catch (error) {
//   console.error("Database connection failed:", error);
//   process.exit(1);
// }

// export default database;


import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Client } = pkg;

const database = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default database;
