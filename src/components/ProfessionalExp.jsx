import PropTypes from "prop-types"
import { useState } from "react"
import "../styles/Section.css"
import { Check, PenSquare, Trash2 } from "lucide-react"

export default function ProfessionalExp({
  setJob,
  setCompany,
  setTime,
  setLocation,
  setDesc,
  profExp,
  save,
  edit,
  remove,
}) {
  const [dropped, setDropped] = useState(false)

  return (
    <div className="section">
      <h2>
        <button
          className="dropdownbtn"
          onClick={() => {
            dropped ? setDropped(false) : setDropped(true)
          }}
        >
          {dropped ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </button>
        Professional Experience
      </h2>
      <div>
        {profExp
          ? profExp.map((card) => {
              return (
                <div key={card.id}>
                  <span>
                    {card.job}, {card.company}
                  </span>
                  <div>
                    <button className="editbtn" onClick={() => edit(card.id)}>
                      <PenSquare />
                    </button>
                    <button
                      className="deletebtn"
                      onClick={() => remove(card.id)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              )
            })
          : null}
      </div>
      {dropped ? (
        <ul>
          <li>
            <label htmlFor="job">Job</label>
            <input
              type="text"
              id="job"
              onChange={(ev) => {
                setJob(ev.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              onChange={(ev) => {
                setCompany(ev.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              onChange={(ev) => {
                setTime(ev.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor="location">Location (city, country)</label>
            <input
              type="text"
              id="location"
              onChange={(ev) => {
                setLocation(ev.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              id="desc"
              onChange={(ev) => {
                setDesc(ev.target.value)
              }}
            />
          </li>
          <button className="savebtn" onClick={() => save()}>
            Save <Check className="icon" />
          </button>
        </ul>
      ) : null}
    </div>
  )
}

ProfessionalExp.propTypes = {
  company: PropTypes.string,
  setCompany: PropTypes.func,
  job: PropTypes.string,
  setJob: PropTypes.func,
  time: PropTypes.string,
  setTime: PropTypes.func,
  location: PropTypes.string,
  setLocation: PropTypes.func,
  desc: PropTypes.string,
  setDesc: PropTypes.func,
  save: PropTypes.func,
  profExp: PropTypes.array,
  edit: PropTypes.func,
  remove: PropTypes.func,
}
