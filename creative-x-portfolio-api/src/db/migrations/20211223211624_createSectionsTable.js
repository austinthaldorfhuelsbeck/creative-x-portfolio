exports.up = function (knex) {
  return knex.schema.createTable("sections", (table) => {
    table.increments("section_id").primary
    table.string("title")
    table.string("img_src")
    table.string("subtext")
    table.string("header")
    table.text("paragraph")
    table.integer("order")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("sections")
}
