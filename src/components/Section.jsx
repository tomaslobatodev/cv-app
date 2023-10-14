import PropTypes from "prop-types"
import { useState } from "react"
import "../styles/Section.css"

export default function Section({ title, inputs, onSave }) {
  const [dropped, setDropped] = useState(false)
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation1] = useState("")

  const save = (title) => {
    if (title === "General Information") {
      const data = {
        title,
        fullname,
        email,
        phone,
        location,
      }
      onSave(data)
    }
  }

  return (
    <div>
      <h2>
        <button
          className="dropdownbtn"
          onClick={() => {
            dropped ? setDropped(false) : setDropped(true)
          }}
        >
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
        </button>
        {title}
      </h2>
      {dropped ? (
        <ul>
          {inputs.map((input) => {
            return (
              <li key={input}>
                <label htmlFor={input}>{input}</label>
                <input
                  type="text"
                  id={input}
                  onChange={(ev) => {
                    if (input === "full-name") setFullname(ev.target.value)
                    else if (input === "e-mail") setEmail(ev.target.value)
                    else if (input === "phone") setPhone(ev.target.value)
                    else if (input === "location") setLocation1(ev.target.value)
                  }}
                />
              </li>
            )
          })}
          <button className="savebtn" onClick={() => save(title)}>
            Save
          </button>
        </ul>
      ) : null}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
}
