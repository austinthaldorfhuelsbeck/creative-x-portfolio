import { Link } from "react-router-dom"
import ProjectGrid from "./ProjectGrid"
import "./PortfolioSection.css"

export default function PortfolioSection() {
  const projects = [
    {
      url: "facebook-web-app",
      title: "Facebook Web App",
      category: "Facebook",
      date: "Jul 2021",
      img: "https://assets.website-files.com/6075067ce85066282bbab900/60764e200a76da36e1850114_facebook-web-app-image-creative-x-webflow-template.png"
    },
    {
      url: "instagram-mobile-app",
      title: "Instagram Mobile App",
      category: "Instagram",
      date: "Jun 2021",
      img: "https://assets.website-files.com/6075067ce85066282bbab900/60764d6d148e0ed792596fa3_instagram-mobile-app-image-creative-x-webflow-template.png"
    },
    {
      url: "pinterest-web-app",
      title: "Pinterest Web App",
      category: "Pinterest",
      date: "Jan 2020",
      img: "https://assets.website-files.com/6075067ce85066282bbab900/60764c8e6b64095bf7b48853_pinterest-web-app-image-creative-x-webflow-template.png"
    },
  ]

  return (
    <div id="portfolio" className="section">
      <div className="container-default">
        <h2>Portfolio</h2>
        <div className="project-collection-list">
          <ProjectGrid projects={projects} />
        </div>
        <div className="flex center">
          <div className="mg-top-76px">
            <Link to="/portfolio" className="button-primary w-button">Browse All Projects</Link>
          </div>
        </div>
      </div>
    </div>
  )
}