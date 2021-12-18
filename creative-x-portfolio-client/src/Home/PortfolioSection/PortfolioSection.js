import { Link } from "react-router-dom"
import ProjectGrid from "./ProjectGrid"
import "./PortfolioSection.css"

export default function PortfolioSection({ projects }) {
  return (
    <div id="portfolio" className="section">
      <div className="container-default">
        <h2>Portfolio</h2>
        <div className="project-collection-list">
          <ProjectGrid projects={projects} />
        </div>
        <div className="flex center">
          <div className="mg-top-76px">
            <Link to="/portfolio" className="button-primary w-button">
              Browse All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
