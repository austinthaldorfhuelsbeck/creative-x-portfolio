exports.up = function (knex) {
  return knex.schema.createTable("nav", (table) => {
    table.increments("nav_id").primary
    table.string("title")
    table.string("link")
    table.integer("order")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("nav")
}
