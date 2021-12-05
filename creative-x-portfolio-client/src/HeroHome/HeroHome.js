import "./HeroHome.css"

export default function HeroHome() {
  const imgSrc =
    "https://assets.website-files.com/6075067ce8506664f2bab8ef/607510feed2178915ca59333_hero-homage-image-creative-x-webflow-template.jpg"
  
  return (
    <div className="section hero-home">
      <div className="container-default">
        <div className="w-layout-grid grid-2-columns hero-home">
          <div>
            <div className="subtext">Austin Thaldorf-Huelsbeck</div>
            <h1 className="mg-top-32px">A Full-Stack Web Developer from Seattle</h1>
            <p className="paragraph-large">Proficient in HTML, CSS, SQL, and JavaScript with React.js and Node.js</p>
            <div className="mg-top-76px">
              <div className="button-primary w-button">Say Hello</div>
            </div>
          </div>
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
                src="https://assets.website-files.com/6075067ce8506664f2bab8ef/6075a30866432ef6b6513e0e_arrow-down-creative-x-webflow-template.svg"
                loading="lazy"
                alt="Scroll Down"
                class="scroll-down-animate scroll-down-image"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}