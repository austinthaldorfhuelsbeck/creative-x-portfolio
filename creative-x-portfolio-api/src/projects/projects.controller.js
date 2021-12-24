const service = require("./projects.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

/**
 * Defines the controller for project resources
 * Includes validation for existing and new projects
 * Includes list, create, read, update methods
 *
 * @type {Service}
 */

/**
 * Validation for project resources
 */
async function projectExists(req, res, next) {
  let id = ""
  if (req.params.project_id) {
    id = req.params.project_id
  } else {
    id = req.body.data.project_id
  }
  const projectList = await service.read(id)
  const project = projectList[0]
  if (project) {
    res.locals.project = project
    return next()
  }
  next({
    status: 404,
    message: `Project ${req.params.project_id} cannot be found.`,
  })
}
async function isValidProject(req, res, next) {
  const project = { ...req.body }
  const message = project.title ? "" : "Title required. "
  // returns error or sets res.locals
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.project = project
  return next()
}

/**
 * Handlers for project resources
 */
async function list(req, res) {
  const data = await service.list()
  res.json({ data })
}
async function create(req, res) {
  const { project } = res.locals
  const data = await service.create(project)
  res.status(201).json({ data })
}
function read(req, res) {
  const data = res.locals.project
  res.json({ data })
}
async function update(req, res) {
  const data = await service.update(
    res.locals.project,
    res.locals.project.project_id
  )
  res.json({ data: data[0] })
}
async function destroy(req, res, next) {
  const id = res.locals.project.project_id
  const data = await service.delete(id)
  res.status(204).json({ data })
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(isValidProject), create],
  read: [asyncErrorBoundary(projectExists), read],
  update: [asyncErrorBoundary(isValidProject), update],
  delete: [asyncErrorBoundary(projectExists), destroy],
}
