const service = require("./sections.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

/**
 * Defines the controller for section resources
 * Includes validation for existing and new sections
 * Includes list, create, read, update methods
 *
 * @type {Service}
 */

/**
 * Validation for nav resources
 */
async function sectionExists(req, res, next) {
  let id = ""
  if (req.params.section_id) {
    id = req.params.section_id
  } else {
    id = req.body.data.section_id
  }
  const sectionList = await service.read(id)
  const section = sectionList[0]
  if (section) {
    res.locals.section = section
    return next()
  }
  next({
    status: 404,
    message: `Section ${req.params.section_id} cannot be found.`,
  })
}
async function isValidSection(req, res, next) {
  const section = { ...req.body }
  const message = section.title ? "" : "Title required. "
  // returns error or sets res.locals
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.section = section
  return next()
}

/**
 * Handlers for section resources
 */
async function list(req, res) {
  const data = await service.list()
  res.json({ data })
}
async function create(req, res) {
  const { section } = res.locals
  const data = await service.create(section)
  res.status(201).json({ data })
}
function read(req, res) {
  const data = res.locals.section
  res.json({ data })
}
async function update(req, res) {
  const data = await service.update(res.locals.nav, res.locals.nav.nav_id)
  res.json({ data: data[0] })
}
async function destroy(req, res, next) {
  const id = res.locals.section.section_id
  const data = await service.delete(id)
  res.status(204).json({ data })
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(isValidSection), create],
  read: [asyncErrorBoundary(sectionExists), read],
  update: [asyncErrorBoundary(sectionExists), update],
  delete: [asyncErrorBoundary(sectionExists), destroy],
}
