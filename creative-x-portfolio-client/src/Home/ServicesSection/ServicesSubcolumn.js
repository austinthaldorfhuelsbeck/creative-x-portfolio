import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function ServicesSubColumn({ items }) {
  return items.map((item) => {
    let element = ""
    if (item.link && item.external) {
      element = (
        <a href={item.url} target="_blank" rel="noreferrer" className="link-social-media w-inline-block">
          {item.title + " "}
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      )
    } else if (item.link) {
      element = (
        <a href={item.url} className="w-inline-block">{item.title}</a>
      )
    } else {
      element = item.title
    }

    return (
      <li key={item} className="services-list-item">
        {element}
      </li>
    )
  })
}