const knex = require("../db/connection")

/**
 * CRUDL services for nav resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("nav").select("*").orderBy("order")
}
function create(nav) {
  return knex("nav")
    .insert(nav)
    .returning("*")
    .then((createdNav) => createdNav[0])
}
function read(id) {
  return knex("nav as n").select("*").where({ "n.nav_id": id })
}
function update(updatedNav, id) {
  return knex("nav").select("*").where({ nav_id: id }).update(updatedNav, "*")
}
function destroy(id) {
  return knex("nav").where({ nav_id: id }).del()
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}
