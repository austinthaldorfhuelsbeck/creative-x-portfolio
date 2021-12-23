// DEPENDENCIES
if (process.env.USER) require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
// ROUTES
const navRouter = require("./nav/nav.router")
const sectionsRouter = require("./sections/sections.router")
const projectsRouter = require("./projects/projects.router")
// ERROR HANDLERS
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

app.use(
  cors({
    origin: "*",
  })
)
app.use(express.json())

// Route handlers
app.use("/nav", navRouter)
app.use("/sections", sectionsRouter)
app.use("/projects", projectsRouter)

// Error handlers
app.use(notFound)
app.use(errorHandler)

module.exports = app
