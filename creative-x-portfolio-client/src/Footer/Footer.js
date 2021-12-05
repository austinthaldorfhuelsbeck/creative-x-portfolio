import ServicesSection from "../Home/ServicesSection/ServicesSection"
import "./Footer.css"

export default function Footer({ scrollToTop }) {

  return (
    <footer>
      <div className="container-default">
        <div className="w-layout-grid footer-grid-top">
          <div className="footer-logo-container w-inline-block" onClick={scrollToTop}>
            <img
              src="https://assets.website-files.com/6075067ce8506664f2bab8ef/60759e77266d4cf54fd4895e_creative-x-logo-webflow-template.svg"
              alt="Creative X"
              className="footer-logo"
            />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisng elit. Mi odio sed sapien quisque posuere.</p>
        </div>
      </div>
      <ServicesSection alt={true} />
    </footer>
  )
}