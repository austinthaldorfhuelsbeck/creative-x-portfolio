const columns = require("./04-columns.json")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE columns RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("columns").insert(columns)
    })
}
