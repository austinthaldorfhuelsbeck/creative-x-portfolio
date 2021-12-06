import { Link } from "react-scroll"

export default function HeroImage({ imgSrc }) {
  const arrowImgSrc = "https://assets.website-files.com/6075067ce8506664f2bab8ef/6075a30866432ef6b6513e0e_arrow-down-creative-x-webflow-template.svg"
  
  return (
    <div className="hero-home-image-container">
      <img
        src={imgSrc}
        sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 616px"
        alt="Austin Thaldorf-Huelsbeck"
        className="hero-image-home"
      />
      <a href="#services" className="scroll-down-link w-inline-block">
        <Link smooth to="services" className="scroll-link-text">Scroll Down</Link>
        <img
          src={arrowImgSrc}
          alt="Scroll Down"
          class="scroll-down-image"
        ></img>
      </a>
    </div>
  )
}