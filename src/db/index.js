const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const client = new pg.Client({
  host: process.env.PGHOST || "",
  port:process.env.PGPORT,
  user:process.env.PGUSER,
  password:process.env.PGPASSWORD,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
