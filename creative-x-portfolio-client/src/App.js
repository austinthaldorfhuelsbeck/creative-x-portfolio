import { Routes, Route } from "react-router-dom"
import NavBar from "./Home/NavBar/NavBar"
import HeroHome from "./Home/HeroHome/HeroHome"
import ServicesSection from "./Home/ServicesSection/ServicesSection"
import PortfolioSection from "./Home/PortfolioSection/PortfolioSection"
import AboutSection from "./Home/AboutSection/AboutSection"
import ContactSection from "./Home/ContactSection/ContactSection"
import "./App.css"

export default function App() {
  const HomePage = () => {
    return (
      <div>
        <HeroHome />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}