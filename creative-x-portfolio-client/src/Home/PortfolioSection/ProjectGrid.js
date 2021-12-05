import ProjectItem from "./ProjectItem"

export default function ProjectGrid(){
  const projects = [
    {
      projectId: "facebook-web-app",
      title: "Facebook Web App",
      category: "Facebook",
      date: "Jul 2021",
      img: "https://assets.website-files.com/6075067ce85066282bbab900/60764e200a76da36e1850114_facebook-web-app-image-creative-x-webflow-template.png"
    },
    {
      projectId: "instagram-mobile-app",
      title: "Instagram Mobile App",
      category: "Instagram",
      date: "Jun 2021",
      img: "https://assets.website-files.com/6075067ce85066282bbab900/60764d6d148e0ed792596fa3_instagram-mobile-app-image-creative-x-webflow-template.png"
    },
    {
      projectId: "pinterest-web-app",
      title: "Pinterest Web App",
      category: "Pinterest",
      date: "Jan 2020",
      img: "https://assets.website-files.com/6075067ce85066282bbab900/60764c8e6b64095bf7b48853_pinterest-web-app-image-creative-x-webflow-template.png"
    },
  ]

  // Hardcoded to preview exactly three projects
  return (
    <ul className="project-grid">
      {projects.slice(0, 2).map((project) => (
        <li key={project.title} className="project-item list-style-none">
          <ProjectItem {...project} />
        </li>
      ))}
      {projects.slice(2, 3).map((project) => (
        <li key={project.title} className="list-style-none">
          <ProjectItem {...project} />
        </li>
      ))}
    </ul>
  )
}