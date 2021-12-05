import HeroHeader from "./HeroHeader"
import HeroImage from "./HeroImage"
import "./HeroHome.css"

export default function HeroHome() {
  return (
    <div className="section hero-home">
      <div className="container-default">
        <div className="w-layout-grid grid-2-columns hero-home">
          <HeroHeader />
          <HeroImage />
        </div>
      </div>
    </div>
  )
}