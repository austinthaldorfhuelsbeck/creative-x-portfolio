import ServicesSubColumn from "./ServicesSubcolumn"

export default function ServicesColumn({ side, subtext, columns }) {
  return (
    <div className={"services-column " + side}>
      <div className="subtext grey-medium">{subtext}</div>
      <div className="footer-menu-container">
        {columns.map((column) => (
          <ul
            key={column.title}
            className={"list-services " + column.title}
          >
            <ServicesSubColumn {...column} />
          </ul>
        ))}
      </div>
    </div>
  )
}