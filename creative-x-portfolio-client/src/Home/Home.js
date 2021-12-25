import { useState, useEffect } from "react"

import NavBar from "../NavBar/NavBar"
import HeroHome from "./HeroHome/HeroHome"
import ServicesSection from "./ServicesSection/ServicesSection"
import PortfolioSection from "./PortfolioSection/PortfolioSection"
import AboutSection from "./AboutSection/AboutSection"
import ContactSection from "./ContactSection/ContactSection"

export default function Home({ scrollToTop }) {
  // Base API URL or dev URL
  const url = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"

  // State for props and errors
  const [nav, setNav] = useState([])
  const [navErr, setNavErr] = useState([])
  const [sections, setSections] = useState([])
  const [sectionsErr, setSectionsErr] = useState([])
  const [projects, setProjects] = useState([])
  const [projectsErr, setProjectsErr] = useState([])
  const [services, setServices] = useState([])
  const [servicesErr, setServicesErr] = useState([])

  // Load data for props
  useEffect(() => {
    fetch(`${url}/nav`)
      .then((res) => res.json())
      .then((res) => setNav(res.data))
      .catch(setNavErr)
    fetch(`${url}/sections`)
      .then((res) => res.json())
      .then((res) => setSections(res.data))
      .catch(setSectionsErr)
    fetch(`${url}/projects`)
      .then((res) => res.json())
      .then((res) => setProjects(res.data))
      .catch(setProjectsErr)
    fetch(`${url}/services`)
      .then((res) => res.json())
      .then((res) => setServices(res.data))
      .catch(setServicesErr)
  }, [url])

  // Find each section and store as objects
  const hero = sections.find((s) => s.title === "hero")
  const about = sections.find((s) => s.title === "about")
  const contact = sections.find((s) => s.title === "contact")

  return (
    <div>
      {navErr}
      {servicesErr}
      {sectionsErr}
      {projectsErr}
      <NavBar nav={nav} />
      <HeroHome {...hero} />
      <ServicesSection services={services} alt={false} />
      <PortfolioSection projects={projects} scrollToTop={scrollToTop} />
      <AboutSection {...about} scrollToTop={scrollToTop} />
      <ContactSection {...contact} scrollToTop={scrollToTop} />
    </div>
  )
}
