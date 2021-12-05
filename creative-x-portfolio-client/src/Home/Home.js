import NavBar from "../NavBar/NavBar"
import HeroHome from "./HeroHome/HeroHome"
import ServicesSection from "./ServicesSection/ServicesSection"
import PortfolioSection from "./PortfolioSection/PortfolioSection"
import AboutSection from "./AboutSection/AboutSection"
import ContactSection from "./ContactSection/ContactSection"

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroHome />
      <ServicesSection alt={false} />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}