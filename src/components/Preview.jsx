import PropTypes from "prop-types"
import "../styles/preview.css"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Preview({
  fullname,
  email,
  phone,
  location,
  education,
  profExp,
}) {
  return (
    <div className="preview">
      <header>
        <h1>{fullname}</h1>
        <div>
          {email && (
            <span>
              <Mail className="icon" />
              {email}
            </span>
          )}

          {phone && (
            <span>
              <Phone className="icon" />
              {phone}
            </span>
          )}

          {location && (
            <span>
              <MapPin className="icon" />
              {location}
            </span>
          )}
        </div>
      </header>

      {education.length !== 0 && (
        <div className="sec">
          <h2>Education</h2>
          <ul>
            {education.map((card) => (
              <li key={card.id} className="lisec1">
                <h3>
                  <b>{card.degree}</b>, <i>{card.school}</i>
                </h3>
                <span>
                  {card.time} <b>{card.location2}</b>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {profExp.length !== 0 && (
        <div className="sec">
          <h2>Professional Experience</h2>
          <ul>
            {profExp.map((card) => (
              <li key={card.id} className="lisec2">
                <div>
                  <h3>
                    <b>{card.job}</b>, <i>{card.company}</i>
                  </h3>
                  <span>
                    {card.time2} <b>{card.location3}</b>
                  </span>
                </div>
                <p>{card.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

Preview.propTypes = {
  fullname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  education: PropTypes.array,
  profExp: PropTypes.array,
}
