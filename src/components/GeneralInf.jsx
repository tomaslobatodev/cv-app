import PropTypes from "prop-types"
import { useState } from "react"
import "../styles/Section.css"

export default function GeneralInformation({
  fullname,
  setFullname,
  email,
  setEmail,
  phone,
  setPhone,
  location,
  setLocation,
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
        General Information
      </h2>
      {dropped ? (
        <ul>
          <li>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              defaultValue={fullname}
              onChange={(ev) => {
                setFullname(ev.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor="email">E-Mail</label>
            <input
              type="text"
              id="email"
              defaultValue={email}
              onChange={(ev) => {
                setEmail(ev.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              defaultValue={phone}
              onChange={(ev) => {
                setPhone(ev.target.value)
              }}
            />
          </li>
          <li>
            <label htmlFor="location">Location (city, country)</label>
            <input
              type="text"
              id="location"
              defaultValue={location}
              onChange={(ev) => {
                setLocation(ev.target.value)
              }}
            />
          </li>
        </ul>
      ) : null}
    </div>
  )
}

GeneralInformation.propTypes = {
  fullname: PropTypes.string,
  setFullname: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  phone: PropTypes.string,
  setPhone: PropTypes.func,
  location: PropTypes.string,
  setLocation: PropTypes.func,
  save: PropTypes.func,
}
