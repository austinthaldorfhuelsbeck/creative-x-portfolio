import { Routes, Route } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll"
import Home from "./Home/Home"
import Portfolio from "./Portfolio/Portfolio"
import Project from "./Portfolio/Project"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import "./App.css"

export default function App() {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div className="page-wrapper">
      <Routes>
        <Route exact path="/" element={<Home scrollToTop={scrollToTop} />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer scrollToTop={scrollToTop} />
    </div>
  )
}