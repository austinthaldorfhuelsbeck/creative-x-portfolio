const router = require("express").Router()
const controller = require("./sections.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for section resources
 *
 * @type {Router}
 */
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)
router
  .route("/:section_id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed)

module.exports = router
