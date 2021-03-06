import ServicesSection from "../Home/ServicesSection/ServicesSection"
import "./Footer.css"

export default function Footer({ scrollToTop }) {
  return (
    <footer>
      <div className="container-default">
        <div className="w-layout-grid footer-grid-top">
          <div
            className="footer-logo-container w-inline-block"
            onClick={scrollToTop}
          >
            <h3 className="footer-logo">Back To Top</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisng elit. Mi odio sed
            sapien quisque posuere.
          </p>
        </div>
      </div>
      <ServicesSection alt={true} />
    </footer>
  )
}
