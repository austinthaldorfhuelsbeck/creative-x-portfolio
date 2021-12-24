const knex = require("../db/connection")

/**
 * CRUDL services for projects resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("projects").select("*")
}
function create(project) {
  return knex("projects")
    .insert(project)
    .returning("*")
    .then((createdProject) => createdProject[0])
}
function read(id) {
  return knex("projects as p").select("*").where({ "p.project_id": id })
}
function update(updatedProject, id) {
  return knex("projects")
    .select("*")
    .where({ project_id: id })
    .update(updatedProject, "*")
}
function destroy(id) {
  return knex("projects").where({ project_id: id }).del()
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}
