exports.up = function (knex) {
  return knex.schema.createTable("columns", (table) => {
    table.increments("column_id").unsigned().notNullable().primary
    table.integer("service_id").references("services.service_id")
    table.string("title")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("columns")
}
