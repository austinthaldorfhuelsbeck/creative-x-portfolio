import { Link } from "react-router-dom"

export default function ContactButton() {
  return (
    <div className="mg-top-56px">
      <div className="flex center left-ml">
        <Link to="/contact" class="button-primary w-button">
          Send Me A Message
        </Link>
      </div>
    </div>
  )
}