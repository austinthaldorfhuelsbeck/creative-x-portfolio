const items = require("./05-items.json")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex.raw("TRUNCATE TABLE items RESTART IDENTITY CASCADE").then(() => {
    return knex("items").insert(items)
  })
}
