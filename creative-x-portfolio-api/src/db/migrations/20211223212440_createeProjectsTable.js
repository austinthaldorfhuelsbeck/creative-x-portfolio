exports.up = function (knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("project_id").primary
    table.string("title")
    table.string("url")
    table.string("category")
    table.string("img")
    table.string("date")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("projects")
}
