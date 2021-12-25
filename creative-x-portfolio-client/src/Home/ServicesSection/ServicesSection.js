import ServicesColumn from "./ServicesColumn"
import "./ServicesSection.css"

export default function ServicesSection({ services, alt }) {
  // Find the left side service or the alt left side
  const leftService = alt
    ? services.find((s) => s.alt)
    : services.find((s) => s.side === "left" && !s.alt)
  // Find the right side service, there is only one
  const rightService = services.find((s) => s.side === "right")

  // Generate elements from service objects
  const leftElement = <ServicesColumn {...leftService} />
  const rightElement = <ServicesColumn {...rightService} />

  return (
    <div id="services" className="section services-and-social">
      <div className="container-default">
        <div className="w-layout-grid grid-2-columns home-services">
          {leftElement}
          {rightElement}
        </div>
      </div>
    </div>
  )
}
