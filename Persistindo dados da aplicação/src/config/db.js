const { Pool } = require("pg")

module.exports = new Pool ({
  users: 'postgres',
  password: "397249",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
})