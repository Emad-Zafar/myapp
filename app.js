const express = require("express");
const { Client } = require("pg");

const app = express();
const port = 3000;

const client = new Client({
  user: "user",
  host: "db",
  database: "mydb",
  password: "password",
  port: 5432,
});

client.connect();

app.get("/", async (req, res) => {
  const result = await client.query("SELECT NOW()");
  res.send(`Current Time: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
