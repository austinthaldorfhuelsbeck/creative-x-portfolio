import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function ServicesSubColumn({ items }) {
  return items.map((item) => (
    <li key={item} className="services-list-item">
      {item.link ?
        <a href={item.url} target="_blank" rel="noreferrer" className="link-social-media w-inline-block">
          {item.title + " "}
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a> :
      item.title}
    </li>
  ))
}