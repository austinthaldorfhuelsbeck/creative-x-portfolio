const services = require("./03-services.json")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE services RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("services").insert(services)
    })
}
