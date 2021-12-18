import NavBar from "../NavBar/NavBar"
import HeroHome from "./HeroHome/HeroHome"
import ServicesSection from "./ServicesSection/ServicesSection"
import PortfolioSection from "./PortfolioSection/PortfolioSection"
import AboutSection from "./AboutSection/AboutSection"
import ContactSection from "./ContactSection/ContactSection"

import { nav, sections, projects } from "../data/data"

export default function Home({ scrollToTop }) {
  // Find each section and store as objects
  const hero = sections.find((s) => s.title === "hero")
  const about = sections.find((s) => s.title === "about")
  const contact = sections.find((s) => s.title === "contact")

  return (
    <div>
      <NavBar nav={nav} />
      <HeroHome {...hero} />
      <ServicesSection alt={false} />
      <PortfolioSection projects={projects} />
      <AboutSection {...about} scrollToTop={scrollToTop} />
      <ContactSection {...contact} scrollToTop={scrollToTop} />
    </div>
  )
}
