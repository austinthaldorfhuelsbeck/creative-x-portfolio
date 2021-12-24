const projects = require("./02-projects.json")

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE projects RESTART IDENTITY CASCADE")
    .then(() => {
      return knex("projects").insert(projects)
    })
}
