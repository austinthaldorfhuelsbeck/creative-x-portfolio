const service = require("./nav.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

/**
 * Defines the controller for nav resources
 * Includes validation for existing and new nav
 * Includes list, create, read, update methods
 *
 * @type {Service}
 */

/**
 * Validation for nav resources
 */
async function navExists(req, res, next) {
  let id = ""
  if (req.params.nav_id) {
    id = req.params.nav_id
  } else {
    id = req.body.data.nav_id
  }
  const navList = await service.read(id)
  const nav = navList[0]
  if (nav) {
    res.locals.nav = nav
    return next()
  }
  next({
    status: 404,
    message: `Nav ${req.params.nav_id} cannot be found.`,
  })
}
async function isValidNav(req, res, next) {
  const nav = { ...req.body }
  let message = ""
  if (!nav.title) message += "Title required. "
  if (!nav.link) message += "Link required. "
  // returns error or sets res.locals
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.nav = nav
  return next()
}

/**
 * Handlers for nav resources
 */
async function list(req, res) {
  const data = await service.list()
  res.json({ data })
}
async function create(req, res) {
  const { nav } = res.locals
  const data = await service.create(nav)
  res.status(201).json({ data })
}
function read(req, res) {
  const data = res.locals.nav
  res.json({ data })
}
async function update(req, res) {
  const data = await service.update(res.locals.nav, res.locals.nav.nav_id)
  res.json({ data: data[0] })
}
async function destroy(req, res, next) {
  const id = res.locals.nav.nav_id
  const data = await service.delete(id)
  res.status(204).json({ data })
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(isValidNav), create],
  read: [asyncErrorBoundary(navExists), read],
  update: [asyncErrorBoundary(navExists), update],
  delete: [asyncErrorBoundary(navExists), destroy],
}
