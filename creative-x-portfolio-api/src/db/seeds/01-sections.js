const sections = require("./01-sections.json")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE sections RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("sections").insert(sections)
    })
}
