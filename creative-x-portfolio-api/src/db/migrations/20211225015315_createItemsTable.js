exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("item_id").unsigned().notNullable().primary
    table.integer("column_id").references("columns.column_id")
    table.boolean("link")
    table.boolean("external")
    table.text("title")
    table.text("url")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("items")
}
