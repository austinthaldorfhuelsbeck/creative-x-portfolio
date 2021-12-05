import { Link } from "react-scroll"

export default function HeroHeader() {
  const heroData = {
    subtext: "Austin Thaldorf-Huelsbeck",
    title: "A Full-Stack Web Developer from Seattle",
    paragraph: ""
  }

  return (
    <div className="hero-header">
      <div className="subtext">{heroData.subtext}</div>
      <h1 className="mg-top-32px">{heroData.title}</h1>
      <p className="paragraph-large">{heroData.paragraph}</p>
      <div className="mg-top-76px">
        <Link smooth to="contact" className="button-primary w-button">Say Hello</Link>
      </div>
    </div>
  )
}