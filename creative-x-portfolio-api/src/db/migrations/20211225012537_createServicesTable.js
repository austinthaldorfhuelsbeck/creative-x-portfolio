exports.up = function (knex) {
  return knex.schema.createTable("services", (table) => {
    table.increments("service_id").unsigned().notNullable().primary
    table.string("side")
    table.string("subtext")
    table.boolean("alt")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("services")
}
