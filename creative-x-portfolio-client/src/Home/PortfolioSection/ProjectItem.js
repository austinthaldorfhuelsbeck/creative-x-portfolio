import { Link } from "react-router-dom"

export default function ProjectItem(props) {
  const arrowImgSrc = "https://assets.website-files.com/6075067ce8506664f2bab8ef/607651a2c5d0b98b2b5bc829_project-arrow-creative-x-webflow-template.svg"

  return (
    <Link to={"/portfolio/" + props.projectId} className="project-link w-inline-block">
      <div className="w-layout-grid grid-2-columns projects">
        <div className="blog-card-image-container">
          <img src={props.img} alt={props.title} className="blog-card-image" />
        </div>
        <div className="project-card-content-text">
          <div className="project-card-details">
            <div>{props.category}</div>
            <div className="project-detail-divider">/</div>
            <div>{props.date}</div>
          </div>
          <h3 className="project-title">{props.title}</h3>
          <div className="project-link-container">
            <div className="scroll-link-text">Read Case Study</div>
            <img src={arrowImgSrc} alt="Read Case Study" className="scroll-down-image project" />
          </div>
        </div>
      </div>
    </Link>
  )
}