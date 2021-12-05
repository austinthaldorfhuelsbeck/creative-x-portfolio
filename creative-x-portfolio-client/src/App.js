import { Routes, Route } from "react-router-dom"
import { animateScroll as scroll } from "react-scroll"
import Home from "./Home/Home"
import Portfolio from "./Portfolio/Portfolio"
import Footer from "./Footer/Footer"
import "./App.css"

export default function App() {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const Project = () => {
    return (
      <div></div>
    )
  }

  return (
    <div className="page-wrapper">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<Project />} />
      </Routes>
      <Footer scrollToTop={scrollToTop} />
    </div>
  )
}