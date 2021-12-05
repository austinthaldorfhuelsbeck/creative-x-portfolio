export default function HeroImage() {
  const imgSrc =
  "https://assets.website-files.com/6075067ce8506664f2bab8ef/607510feed2178915ca59333_hero-homage-image-creative-x-webflow-template.jpg"

  const arrowImgSrc =
    "https://assets.website-files.com/6075067ce8506664f2bab8ef/6075a30866432ef6b6513e0e_arrow-down-creative-x-webflow-template.svg"

  return (
    <div className="hero-home-image-container">
      <img
        src={imgSrc}
        sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 616px"
        alt="Austin Thaldorf-Huelsbeck"
        className="hero-image-home"
      />
      <a href="#services" className="scroll-down-link w-inline-block">
        <div className="scroll-link-text">Scroll Down</div>
        <img
          src={arrowImgSrc}
          loading="lazy"
          alt="Scroll Down"
          class="scroll-down-animate scroll-down-image"
        ></img>
      </a>
    </div>
  )
}