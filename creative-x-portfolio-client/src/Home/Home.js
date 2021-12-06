import NavBar from "../NavBar/NavBar"
import HeroHome from "./HeroHome/HeroHome"
import ServicesSection from "./ServicesSection/ServicesSection"
import PortfolioSection from "./PortfolioSection/PortfolioSection"
import AboutSection from "./AboutSection/AboutSection"
import ContactSection from "./ContactSection/ContactSection"

export default function Home({ scrollToTop }) {
  // Nav Items
  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Portfolio",
      link: "portfolio",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Contact",
      link: "contact",
    }
  ]

  // Section Data
  const sections = [
    {
      title: "hero",
      imgSrc: "https://assets.website-files.com/6075067ce8506664f2bab8ef/607510feed2178915ca59333_hero-homage-image-creative-x-webflow-template.jpg",
      subtext: "Austin Thaldorf-Huelsbeck",
      header: "A Full-Stack Web Developer from Seattle",
      paragraph: ""
    },
    {
      title: "about",
      imgSrc: "https://assets.website-files.com/6075067ce8506664f2bab8ef/60765534c4663f5c745fafc8_about-me-creative-x-webflow-template.jpeg",
      paragraph: "Building, creating, and fine-tuning is where I feel at home. Whether it's solving a design challenge, or editing a feature film, I've always gravitated towards the problem-solving side of creative fields. Learning to code has brought that problem-solving, engineering-mindedness into full focus."
    },
    {
      title: "contact",
      header: "Say Hello",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lacus nisi, erat sed porta. Sem bibendum eu dui convallis. Et id."
    }
  ]

  // Find each section and store as objects
  const hero = sections.find(s => s.title === "hero")
  const about = sections.find(s => s.title === "about")
  const contact = sections.find(s => s.title === "contact")

  return (
    <div>
      <NavBar nav={nav} />
      <HeroHome {...hero} />
      <ServicesSection alt={false} />
      <PortfolioSection />
      <AboutSection {...about} scrollToTop={scrollToTop} />
      <ContactSection {...contact} scrollToTop={scrollToTop} />
    </div>
  )
}