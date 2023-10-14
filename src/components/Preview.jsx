import PropTypes from "prop-types"
import "../styles/preview.css"

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
          <span>{email}</span>
          <span>{phone}</span>
          <span>{location}</span>
        </div>
      </header>
      <div className="">
        <h2>Education</h2>
        {education
          ? education.map((card) => (
              <div key={card.id}>
                {card.degree}, {card.school} <br />
              </div>
            ))
          : null}
      </div>
      <div className="">
        <h2>Professional Experience</h2>
        {profExp
          ? profExp.map((card) => (
              <div key={card.id}>
                {card.job}, {card.company} <br />
              </div>
            ))
          : null}
      </div>
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
