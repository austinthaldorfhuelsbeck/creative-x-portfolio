import ServicesColumn from "./ServicesColumn"
import "./ServicesSection.css"

export default function Services({ alt }) {
  const services = [
    {
      side: "left",
      alt: false,
      subtext: "Languages + Skills",
      columns: [
        {
          title: "column-one",
          items: [
            {
              link: false,
              title: "HTML5 + CSS3",
            },
            {
              link: false,
              title: "JavaScript + Node.js",
            },
            {
              link: false,
              title: "React.js",
            }
          ]
        },
        {
          title: "column-two",
          items: [
            {
              link: false,
              title: "Java",
            },
            {
              link: false,
              title: "PostgreSQL",
            },
            {
              link: false,
              title: "Lorem Ipsum",
            }
          ]
        }
      ]
    },
    {
      side: "left",
      subtext: "Menu",
      alt: true,
      columns: [
        {
          title: "column-one",
          items: [
            {
              link: true,
              external: false,
              title: "Home",
              url: "/"
            },
            {
              link: true,
              external: false,
              title: "Full Portfolio",
              url: "/portfolio"
            },
            {
              link: true,
              external: false,
              title: "About Me",
              url: "/about"
            },
            {
              link: true,
              external: false,
              title: "Send Me A Message",
              url: "/contact"
            }
          ]
        }
      ]
    },
    {
      side: "right",
      subtext: "Get In Touch",
      columns: [
        {
          title: "column-one",
          items: [
            {
              link: true,
              external: true,
              title: "GitHub",
              url: "https://github.com/austinthaldorfhuelsbeck"
            },
            {
              link: true,
              external: true,
              title: "LinkedIn",
              url: "https://www.linkedin.com/in/austinhuelsbeck/"
            },
            {
              link: true,
              external: true,
              title: "Twitter",
              url: "https://twitter.com/AustinThaldorf"
            }
          ]
        }
      ]
    }
  ]

  // Find the left side service or the alt left side
  const leftService =
    alt ?
    services.find(s => s.alt) :
    services.find(s => s.side === "left" && !s.alt)
  // Find the right side service, there is only one
  const rightService =
    services.find(s => s.side === "right")
  
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