import { Link } from "react-router-dom"
import "./ContactSection.css"

export default function ContactSection() {
  return (
    <div className="section get-in-touch">
      <div className="container-medium">
        <div className="text-center">
          <h2>Get In Touch</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lacus nisi, erat sed porta. Sem bibendum eu dui convallis. Et id.</p>
          <div className="mg-top-32px">
            <Link to="/contact" className="button-primary w-button">
              Send Me A Message
            </Link>
          </div>
        </div>
      </div>
      <div className="text-big-cta top">Contact Me</div>
      <div className="text-big-cta bottom">Contact Me</div>
    </div>
  )
}