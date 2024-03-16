const pgp = require ("pg-promise")()

const db = pgp("postgres://postgres:1234@localhost:5432/apifinanceiro")

db.query("SELECT 1 + 5 AS teste").then((result) =>console.log(result))

module.exports = db