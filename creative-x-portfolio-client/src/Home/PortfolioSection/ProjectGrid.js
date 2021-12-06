import ProjectItem from "./ProjectItem"

export default function ProjectGrid({ projects }){
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