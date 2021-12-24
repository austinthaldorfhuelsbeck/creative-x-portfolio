const knex = require("../db/connection")

/**
 * CRUDL services for section resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("sections").select("*").orderBy("order")
}
function create(section) {
  return knex("sections")
    .insert(section)
    .returning("*")
    .then((createdSection) => createdSection[0])
}
function read(id) {
  return knex("sections as s").select("*").where({ "s.section_id": id })
}
function update(updatedSection, id) {
  return knex("sections")
    .select("*")
    .where({ section_id: id })
    .update(updatedSection, "*")
}
function destroy(id) {
  return knex("sections").where({ section_id: id }).del()
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}
