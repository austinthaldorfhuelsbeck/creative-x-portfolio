const knex = require("../db/connection")

/**
 * CRUDL services for section resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("section").select("*").orderBy("order")
}
function create(section) {
  return knex("section")
    .insert(section)
    .returning("*")
    .then((createdSection) => createdSection[0])
}
function read(id) {
  return knex("section as s").select("*").where({ "s.section_id": id })
}
function update(updatedSection, id) {
  return knex("section")
    .select("*")
    .where({ section_id: id })
    .update(updatedSection, "*")
}
function destroy(id) {
  return knex("section").where({ section_id: id }).del()
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}
