const nav = require("./00-nav.json")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex.raw("TRUNCATE TABLE nav RESTART IDENTITY CASCADE").then(() => {
    return knex("nav").insert(nav)
  })
}
