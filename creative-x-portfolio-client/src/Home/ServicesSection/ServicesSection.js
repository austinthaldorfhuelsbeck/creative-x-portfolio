import ServicesColumn from "./ServicesColumn"
import "./ServicesSection.css"

export default function Services() {
  const leftProps = {
    side: "left",
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
  }

  const rightProps = {
    side: "right",
    subtext: "Get In Touch",
    columns: [
      {
        title: "column-one",
        items: [
          {
            link: true,
            title: "GitHub",
            url: "https://github.com/austinthaldorfhuelsbeck"
          },
          {
            link: true,
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/austinhuelsbeck/"
          },
          {
            link: true,
            title: "Twitter",
            url: "https://twitter.com/AustinThaldorf"
          }
        ]
      }
    ]
  }

  return (
    <div id="services" className="section services-and-social">
      <div className="container-default">
        <div className="w-layout-grid grid-2-columns home-services">
          <ServicesColumn {...leftProps} />
          <ServicesColumn {...rightProps} />
        </div>
      </div>
    </div>
  )
}