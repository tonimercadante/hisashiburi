import { Pool } from "pg";

let conn = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  host: process.env.PGSQL_HOST,
  port: Number(process.env.PGSQL_PORT),
  database: process.env.PG_DATABASE,
});

export default conn;
