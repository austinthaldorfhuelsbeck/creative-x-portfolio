import { Link } from "react-router-dom"
import "./AboutSection.css"

export default function AboutSection() {
  const imgSrc = "https://assets.website-files.com/6075067ce8506664f2bab8ef/60765534c4663f5c745fafc8_about-me-creative-x-webflow-template.jpeg"
  const aboutData =
    "Building, creating, and fine-tuning is where I feel at home. Whether it's solving a design challenge, or editing a feature film, I've always gravitated towards the problem-solving side of creative fields. Learning to code has brought that problem-solving, engineering-mindedness into full focus."

  return (
    <div id="about" className="section home-about wf-section">
      <div className="container-default home-about">
        <div className="w-layout-grid grid-2-columns home-about">
          <div className="about-me-home-image-container">
            <img
              src={imgSrc}
              alt="Austin Thaldorf-Huelsbeck"
              className="home-about-me-image"
            />
          </div>
          <div>
            <h2>About Me</h2>
            <p className="paragraph-large">{aboutData}</p>
            <div className="mg-top-76px">
              <Link to="/about-me" className="button-primary w-button">
                More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}